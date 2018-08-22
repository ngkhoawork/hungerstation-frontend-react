import { take, race, call, put, fork } from 'redux-saga/effects';

import { setStorageItem } from 'utils/localStorage';
import { authorize, saveTokens } from 'utils/reusedSagas';
import { LOGOUT } from 'containers/App/authConstants';
import { parseJwt } from 'utils/tokens';
import { logUserIn, logout } from 'containers/App/authActions';
import { forwardTo } from 'utils/route';
import { startSubmit, stopSubmit, destroy } from 'redux-form';
import { extractError } from 'utils/helpers';
import { LOGIN_REQUEST } from './constants';

export function* loginFlow() {
  while (true) {
    const { mobile, password, redirectToRoute } = yield take(LOGIN_REQUEST);

    try {
      yield put(startSubmit('signinForm'));

      const {
        authResponse: { authenticateUser },
        logoutResponse,
      } = yield race({
        authResponse: call(authorize, {
          mobile,
          password,
          isRegistering: false,
        }),
        logoutResponse: take(LOGOUT),
      });

      if (authenticateUser) {
        yield saveTokens({
          refreshToken: authenticateUser.refresh_token,
          accessToken: authenticateUser.token,
          accessTokenExpiresAt: parseJwt(authenticateUser.token).iat,
        });
        yield call(setStorageItem, 'userId', authenticateUser.user_id);
        yield put(logUserIn(authenticateUser));
        yield put(destroy('sigupForm'));
        yield call(forwardTo, redirectToRoute);
      }

      if (logoutResponse) {
        yield put(logout(logoutResponse));
      }
    } catch (error) {
      yield put(
        stopSubmit('signinForm', {
          _error: extractError(error),
        }),
      );
    }
  }
}

export default function* root() {
  yield fork(loginFlow);
}
