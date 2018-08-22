import { take, call, put, fork } from 'redux-saga/effects';

import { setStorageItem } from 'utils/localStorage';
import { parseJwt } from 'utils/tokens';
import { logUserIn } from 'containers/App/authActions';
import { authorize, saveTokens } from 'utils/reusedSagas';
import { forwardTo } from 'utils/route';
import { startSubmit, stopSubmit, destroy } from 'redux-form/lib/immutable';
import { extractError } from 'utils/helpers';
import { REGISTER_REQUEST } from './constants';

export function* registerFlow() {
  while (true) {
    const { name, mobile, email, password, redirectToRoute } = yield take(
      REGISTER_REQUEST,
    );

    try {
      yield put(startSubmit('signupForm'));

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

        yield put(destroy('sigupForm'));

        // TODO
        // yield call(successMsg);
        yield call(forwardTo, redirectToRoute);
      }
    } catch (error) {
      yield put(
        stopSubmit('signupForm', {
          _error: extractError(error),
        }),
      );
    }
  }
}

export default function* root() {
  yield fork(registerFlow);
}
