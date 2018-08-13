// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { hashSync } from 'bcryptjs';
import { take, call, put, fork, race, select } from 'redux-saga/effects';

import genSalt from 'utils/salt';
import history from 'createHistory';

import { clearStorageItem, setStorageItem } from 'utils/localStorage';

import { isAccessExpired } from 'utils/tokens';
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
} from './authConstants';

import {
  authenticateUser,
  setAuthState,
  logout as logoutAction,
} from './authActions';
import auth from './authApi';

import { makeSelectTokens } from './selectors';

export function* authorize({
  username,
  number,
  email,
  password,
  isRegistering,
}) {
  yield put(setAuthState(true));

  // We then try to register or log in the user, depending on the request
  try {
    const salt = genSalt(username);
    const hash = hashSync(password, salt);

    let response;
    if (isRegistering) {
      response = yield call(auth.register, username, number, email, hash);
    } else {
      response = yield call(auth.login, username, hash);
    }
    return response;
  } catch (error) {
    // If we get an error we send Redux the appropiate action and return
    yield put({ type: REQUEST_ERROR, error: error.message });
    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put(setAuthState(false));
  }
}

export function* registerFlow() {
  while (true) {
    const request = yield take(REGISTER_REQUEST);
    const { username, number, email, password, redirectToRoute } = request;

    const response = yield call(authorize, {
      username,
      number,
      email,
      password,
      isRegistering: true,
    });

    if (response.user_id) {
      yield saveTokens({
        refreshToken: response.refresh_token,
        accessToken: response.token,
      });
      yield put(authenticateUser(response));
      yield call(forwardTo, redirectToRoute);
    }
  }
}
/* eslint-enable consistent-return */

export function* loginFlow() {
  while (true) {
    const request = yield take(LOGIN_REQUEST);
    const { number, password, redirectToRoute } = request;

    const winner = yield race({
      auth: call(authorize, { number, password, isRegistering: false }),
      logout: take(LOGOUT),
    });

    if (winner.auth) {
      yield saveTokens({
        refreshToken: winner.auth.refresh_token,
        accessToken: winner.auth.token,
      });
      yield put(authenticateUser(winner.auth));
      yield call(forwardTo, redirectToRoute);
    } else {
      yield put(logoutAction());
    }
  }
}

export function* logoutFlow() {
  while (true) {
    yield take(LOGOUT);
    yield put(setAuthState(false));

    yield call(logout);
    yield call(clearStorageItem, 'tokens');
    yield call(forwardTo, '/');
  }
}

export function* logout() {
  // We tell Redux we're in the middle of a request
  yield put(setAuthState(true));

  try {
    const response = yield call(auth.logout);
    yield put(setAuthState(false));
    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });
    return error;
  }
}

export function* saveTokens(tokens) {
  yield call(setStorageItem, 'tokens', tokens);
}

export function* refreshTokens() {
  try {
    const { refreshToken } = yield select(makeSelectTokens());
    const tokens = yield call(auth.refresh, refreshToken);
    yield saveTokens({
      refreshToken: tokens.refresh_token,
      accessToken: tokens.token,
    });
    return null;
  } catch (err) {
    yield call(logout);
    return err;
  }
}

export function* makeAuthenticatedRequest(action) {
  const tokens = yield call(makeSelectTokens());
  const { payload } = action;

  try {
    const query = `query {
      id
      name
      description
    }`;
    const response = yield call(
      auth.makeRequestToProtected,
      tokens.accessToken,
      query,
      payload,
    );
    yield put(action.callbackSuccessAction(response));
  } catch (err) {
    if (isAccessExpired(err)) {
      const refreshError = yield call(refreshTokens);
      if (!refreshError) {
        yield makeAuthenticatedRequest(action);
      }
    } else {
      yield err.statusCode >= 500
        ? put({ type: 'SET_ERROR', err })
        : put(action.callbackFailureAction());
    }
  }
}

export default function* root() {
  yield fork(loginFlow);
  yield fork(logoutFlow);
  yield fork(registerFlow);
}

// Little helper function to abstract going to different pages
function forwardTo(location) {
  history.push(location);
}
