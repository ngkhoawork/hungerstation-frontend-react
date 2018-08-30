import { take, race, call, put, fork } from 'redux-saga/effects';

import { setStorageItem } from 'utils/localStorage';
import { authorize, saveTokens } from 'utils/reusedSagas';
import { LOGOUT } from 'containers/App/authConstants';
import { parseJwt } from 'utils/tokens';
import { logUserIn, logout } from 'containers/App/authActions';
import { forwardTo } from 'utils/route';

import { LOGIN_REQUEST } from './constants';

export function* loginFlow() {
  while (true) {
    const request = yield take(LOGIN_REQUEST);

    const { number, password, redirectToRoute } = request;

    const { authResponse, logoutResponse } = yield race({
      authResponse: call(authorize, { number, password, isRegistering: false }),
      logoutResponse: take(LOGOUT),
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
    }

    if (logoutResponse) {
      yield put(logout(logoutResponse));
    }
  }
}

export default function* root() {
  yield fork(loginFlow);
}
