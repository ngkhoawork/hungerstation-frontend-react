import { take, call, put, fork } from 'redux-saga/effects';

import { setStorageItem } from 'utils/localStorage';
import { parseJwt } from 'utils/tokens';
import { logUserIn } from 'containers/App/authActions';
import { authorize, saveTokens } from 'utils/reusedSagas';
import { forwardTo } from 'utils/route';

import { REGISTER_REQUEST } from './constants';

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

export default function* root() {
  yield fork(registerFlow);
}
