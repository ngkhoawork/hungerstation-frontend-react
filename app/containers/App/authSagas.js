// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { take, call, put, fork, select, spawn } from 'redux-saga/effects';

import { delay } from 'redux-saga';

import registrationSagas from 'containers/RegistrationPageContainer/saga';
import loginSagas from 'containers/LoginPageContainer/saga';
import { forwardTo } from 'utils/route';

import { clearStorageItem, getStorageItem } from 'utils/localStorage';

import { isAccessExpired, parseJwt } from 'utils/tokens';
import HungerStationAPI from 'api/HungerStationAPI';
import { saveTokens } from 'utils/reusedSagas';
import monitorSaga from './monitorSaga';

import { LOGOUT, REQUEST_ERROR, AUTHENTICATE_USER } from './authConstants';
import { setAuthState, updateTokens } from './authActions';
import { makeSelectTokens } from './selectors';

export function* logoutFlow() {
  while (true) {
    yield take(LOGOUT);
    yield put(setAuthState(false));

    yield call(logout);
    yield call(clearStorageItem, 'tokens');
    yield call(clearStorageItem, 'userId');
    yield call(forwardTo, '/');
  }
}

export function* logout() {
  // We tell Redux we're in the middle of a request
  yield put(setAuthState(true));

  try {
    const response = yield call(HungerStationAPI.logout);
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
    const tokens = yield call(HungerStationAPI.refresh, refreshToken);
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

export function* makeAuthenticatedRequest(action = {}) {
  const tokens = yield select(makeSelectTokens);
  const { type, onSuccess, ...payload } = action;

  try {
    const query = `query {
      id
      name
      description
    }`;
    const response = yield call(
      HungerStationAPI.makeRequestToProtected,
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

    if (tokens && Object.keys(tokens)) {
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
}

function* authSagas() {
  yield fork(logoutFlow);
  // yield fork(fetchListener);
  yield fork(authenticationFlow);
}

export default function* root() {
  yield spawn(authSagas);
  yield spawn(registrationSagas);
  yield spawn(loginSagas);
  yield spawn(monitorSaga);
}
