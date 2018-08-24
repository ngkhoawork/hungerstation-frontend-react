import { take, race, call, put, fork } from 'redux-saga/effects';

import { setStorageItem } from 'utils/localStorage';
import { authorize, saveTokens } from 'utils/reusedSagas';
import { parseJwt } from 'utils/tokens';
import { extractError } from 'utils/helpers';
import { forwardTo } from 'utils/route';

import { logUserIn, logout } from 'containers/App/authActions';
import { startSubmit, stopSubmit } from 'containers/Form/actions';

import { LOGOUT } from 'containers/App/authConstants';
import { LOGIN_REQUEST } from './constants';

export function* loginFlow() {
  while (true) {
    const { mobile, password, redirectToRoute } = yield take(LOGIN_REQUEST);

    try {
      yield put(startSubmit());
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
        yield put(stopSubmit());
        yield put(logUserIn(authenticateUser));
        yield call(forwardTo, redirectToRoute);
      }

      if (logoutResponse) {
        yield put(logout(logoutResponse));
      }
    } catch (error) {
      yield put(stopSubmit(extractError(error)));
    }
  }
}

export default function* root() {
  yield fork(loginFlow);
}
