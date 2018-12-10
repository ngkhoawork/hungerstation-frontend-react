// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { take, call, put, fork, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import usersApi from 'modules/user/api';
import { forwardTo } from 'utils/route';
import { getTokenExpire } from 'utils/tokens';
import { clearStorageItem, getStorageItem } from 'utils/localStorage';
import { saveTokens } from 'modules/common/sagas';
import { REQUEST_ERROR, AUTHENTICATE_USER } from './constants';
import { setAuthState, updateTokens, setCurrentUser, logout } from './actions';
import { makeSelectTokens } from './selectors';

export function* logoutFlow() {
  while (true) {
    yield take(logout.type);
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

export function* refreshTokens() {
  try {
    const { refreshToken: token } = yield select(makeSelectTokens);
    const { refreshToken: tokens } = yield call(usersApi.refreshToken, token);
    yield saveTokens({
      refreshToken: tokens.refresh_token,
      accessToken: tokens.token,
      accessTokenExpiresAt: getTokenExpire(tokens.token),
    });
  } catch (err) {
    yield put(logout());
  }
}

export function* refreshTokensIfExpired() {
  const { accessTokenExpiresAt } = yield select(makeSelectTokens);

  if (Date.now() >= accessTokenExpiresAt) yield call(refreshTokens);
}

export function* getCurrentUser() {
  try {
    yield call(refreshTokensIfExpired);
    yield delay(50);

    const { accessToken } = yield select(makeSelectTokens);
    const { user } = yield call(usersApi.getUser, accessToken);
    yield put(setCurrentUser({ user }));
  } catch (err) {
    yield put(logout());
    yield put(setCurrentUser({}));
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
    yield call(getCurrentUser);
  }
}

export default function* authSagas() {
  yield fork(logoutFlow);
  yield fork(authenticationFlow);
}
