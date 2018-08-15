// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { take, call, put, fork, race, select, delay } from 'redux-saga/effects';

import history from 'createHistory';

import {
  clearStorageItem,
  setStorageItem,
  getStorageItem,
} from 'utils/localStorage';

import { isAccessExpired, parseJwt } from 'utils/tokens';
import HungerStationAPI from 'api/HungerStationAPI';

import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  AUTHENTICATE_USER,
} from './authConstants';

import {
  logUserIn,
  setAuthState,
  logout as logoutAction,
  updateTokens,
} from './authActions';
import auth from './authApi';

import { makeSelectTokens } from './selectors';

function* authorize({ username, number, email, password, isRegistering }) {
  yield put(setAuthState(true));

  // We then try to register or log in the user, depending on the request
  try {
    let response;
    if (isRegistering) {
      response = yield call(auth.register, username, number, email, password);
    } else {
      response = yield call(auth.login, username, password);
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
        accessTokenExpiresAt: parseJwt(response.token).iat,
      });
      yield call(setStorageItem, 'userId', response.user_id);
      yield put(logUserIn(response));
      yield call(forwardTo, redirectToRoute);
    }
  }
}
/* eslint-enable consistent-return */

export function* loginFlow() {
  while (true) {
    const request = yield take(LOGIN_REQUEST);
    const { number, password, redirectToRoute } = request;

    const { authResponse, logoutResponse } = yield race({
      authResponse: call(authorize, { number, password, isRegistering: false }),
      logout: take(LOGOUT),
    });

    if (authResponse) {
      yield saveTokens({
        refreshToken: authResponse.refresh_token,
        accessToken: authResponse.token,
        accessTokenExpiresAt: parseJwt(authResponse.token).iat,
      });
      yield call(setStorageItem, 'userId', authResponse.user_id);
      yield put(logUserIn(authResponse));
      yield call(forwardTo, redirectToRoute);
    } else {
      yield put(logoutAction(logoutResponse));
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
  yield call(setStorageItem, 'tokens', JSON.stringify(tokens));
  yield put(updateTokens(tokens));
}

export function* fetchListener(action) {
  const shouldRefresh = yield call(needRefresh);

  if (!shouldRefresh) yield call(makeAuthenticatedRequest, action);
  if (shouldRefresh) {
    const error = yield call(refreshTokens);
    if (!error) {
      yield delay(50);
      yield call(makeAuthenticatedRequest, action);
    }
  }
}

function* needRefresh() {
  const { accessTokenExpiresAt } = yield select(makeSelectTokens);

  const accessExpiration = new Date(accessTokenExpiresAt).getTime();
  return Date.now() >= accessExpiration;
}

export function* refreshTokens() {
  try {
    const { refreshToken } = yield select(makeSelectTokens);
    const tokens = yield call(auth.refresh, refreshToken);
    yield saveTokens({
      refreshToken: tokens.refresh_token,
      accessToken: tokens.token,
      accessTokenExpiresAt: parseJwt(tokens.token).iat,
    });
    return null;
  } catch (err) {
    yield call(logout);
    return err;
  }
}

export function* makeAuthenticatedRequest(action) {
  const tokens = yield call(makeSelectTokens());
  const { type, onSuccess, ...payload } = action;

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
    yield put(onSuccess(response));
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

export function* authenticationFlow() {
  while (true) {
    yield take(AUTHENTICATE_USER);

    const tokens = yield call(getStorageItem, 'tokens');
    const userId = yield call(getStorageItem, 'userId');
    yield put(updateTokens(JSON.parse(tokens)));

    const shouldRefresh = yield call(needRefresh);
    if (!shouldRefresh) {
      yield call(HungerStationAPI.getUser, tokens.accessToken, userId);
    } else {
      const error = yield call(refreshTokens);
      if (!error) {
        yield delay(50);
        yield call(HungerStationAPI.getUser, tokens.accessToken, userId);
      }
    }
  }
}

export default function* root() {
  yield fork(loginFlow);
  yield fork(logoutFlow);
  yield fork(registerFlow);
  yield fork(fetchListener);
  yield fork(authenticationFlow);
}

// function* authSagas() {
//   yield fork(loginFlow);
//   yield fork(logoutFlow);
//   yield fork(registerFlow);
//   yield fork(fetchListener);
//   yield fork(authenticationFlow);
// }

// export default function* root() {
//   yield spawn(authSagas);
//   yield spawn(usersSaga);
// }

// Little helper function to abstract going to different pages
function forwardTo(location) {
  history.push(location);
}
