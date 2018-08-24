import { take, call, put, fork } from 'redux-saga/effects';

import { setStorageItem } from 'utils/localStorage';
import { parseJwt } from 'utils/tokens';
import { authorize, saveTokens } from 'utils/reusedSagas';
import { forwardTo } from 'utils/route';

import { logUserIn } from 'containers/App/authActions';
import { startSubmit, stopSubmit } from 'containers/Form/actions';
import { extractError } from 'utils/helpers';

import { REGISTER_REQUEST } from './constants';

export function* registerFlow() {
  while (true) {
    const { name, mobile, email, password, redirectToRoute } = yield take(
      REGISTER_REQUEST,
    );

    try {
      yield put(startSubmit());

      const { createUser: response } = yield call(authorize, {
        name,
        mobile,
        email,
        password,
        isRegistering: true,
      });

      if (response && response.user_id) {
        yield saveTokens({
          refreshToken: response.refresh_token,
          accessToken: response.token,
          accessTokenExpiresAt: parseJwt(response.token).iat,
        });
        yield put(logUserIn(response));
        yield call(setStorageItem, 'userId', response.user_id);

        yield put(stopSubmit());

        // TODO
        // yield call(successMsg);
        yield call(forwardTo, redirectToRoute);
      }
    } catch (error) {
      yield put(stopSubmit(extractError(error)));
    }
  }
}

export default function* root() {
  yield fork(registerFlow);
}
