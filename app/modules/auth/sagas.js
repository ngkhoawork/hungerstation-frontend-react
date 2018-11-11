// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { take, call, put, fork, select } from 'redux-saga/effects';

import { delay } from 'redux-saga';

import usersApi from 'modules/user/api';

import { forwardTo } from 'utils/route';
import { isAccessExpired, parseJwt } from 'utils/tokens';
import { clearStorageItem, getStorageItem } from 'utils/localStorage';
import { protectedRequest } from 'utils/api';

import { saveTokens } from 'modules/common/sagas';

import { LOGOUT, REQUEST_ERROR, AUTHENTICATE_USER } from './constants';
import { setAuthState, updateTokens, setCurrentUser, logout } from './actions';
import { makeSelectTokens } from './selectors';

export function* logoutFlow() {
  while (true) {
    yield take(LOGOUT);
    yield put(setAuthState(false));

    yield call(logoutWoker);
    yield call(clearStorageItem, 'tokens');
    yield call(clearStorageItem, 'userId');
    yield call(forwardTo, '/');
  }
}

export function* logoutWoker() {
  // We tell Redux we're in the middle of a request
  // yield put(setAuthState(true));

  try {
    const response = yield call(usersApi.logout);
    yield put(setAuthState(false));
    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });
    return error;
  }
}

// export function* fetchListener(action) {
//   while (true) {
//     const { payload } = yield take('@@router/LOCATION_CHANGE');

//     if (payload.pathname === '/login') {
//       console.log(payload);
//       // should listen on every api call
//       const shouldRefresh = yield call(needRefresh);

//       if (!shouldRefresh) yield call(makeAuthenticatedRequest, action);
//       if (shouldRefresh) {
//         const error = yield call(refreshTokens);
//         if (!error) {
//           yield delay(50);
//           yield call(makeAuthenticatedRequest, action);
//         }
//       }
//     }
//   }
// }

function* needRefresh() {
  const { accessTokenExpiresAt } = yield select(makeSelectTokens);

  const accessExpiration = new Date(accessTokenExpiresAt).getTime();
  return Date.now() >= accessExpiration;
}

export function* refreshTokens() {
  try {
    const { refreshToken } = yield select(makeSelectTokens);
    const tokens = yield call(usersApi.refreshToken, refreshToken);
    yield saveTokens({
      refreshToken: tokens.refresh_token,
      accessToken: tokens.token,
      accessTokenExpiresAt: parseJwt(tokens.token).iat,
    });
    return null;
  } catch (err) {
    yield put(logout());
    return err;
  }
}

export function* makeAuthenticatedRequest(action = {}) {
  const tokens = yield select(makeSelectTokens);
  const { type, onSuccess, onError, ...payload } = action;

  try {
    const query = `query {
      id
      name
      description
    }`;
    const response = yield call(
      protectedRequest,
      tokens.get('accessToken'),
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
        : put(onError(err));
    }
  }
}

export function* getCurrentUser(tokens) {
  try {
    const { user } = yield call(usersApi.getUser, tokens.accessToken);
    yield put(setCurrentUser({ user }));
  } catch (err) {
    yield put(logout());
    yield put(setCurrentUser({ user: null }));
  }
}

export function* authenticationFlow() {
  while (true) {
    yield take(AUTHENTICATE_USER);

    const tokens = JSON.parse(getStorageItem('tokens'));

    if (!tokens || !Object.keys(tokens).length) {
      yield put(setAuthState(false));

      return;
    }

    yield put(updateTokens(tokens));

    const shouldRefresh = yield call(needRefresh);

    if (!shouldRefresh) {
      yield call(getCurrentUser, tokens);
    } else {
      const error = yield call(refreshTokens);
      if (!error) {
        yield delay(50);
        yield call(getCurrentUser, tokens);
      }
    }
  }
}

export default function* authSagas() {
  yield fork(logoutFlow);
  // yield fork(fetchListener);
  yield fork(authenticationFlow);
}
