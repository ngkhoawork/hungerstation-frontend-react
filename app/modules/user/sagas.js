import { take, race, call, put, fork } from 'redux-saga/effects';

import { setStorageItem } from 'utils/localStorage';
import { saveTokens } from 'utils/reusedSagas';
import { parseJwt } from 'utils/tokens';
import { extractError } from 'utils/helpers';
import { forwardTo } from 'utils/route';

import HungerStationAPI from 'api/HungerStationAPI';

import { logUserIn, logout, setAuthState } from 'containers/App/authActions';
import { startSubmit, stopSubmit } from 'containers/Form/actions';

import { LOGOUT } from 'containers/App/authConstants';
import { LOGIN_REQUEST, REGISTER_REQUEST } from './constants';

export function* loginFlow() {
  while (true) {
    const { mobile, password, redirectToRoute } = yield take(LOGIN_REQUEST);

    try {
      yield put(startSubmit());
      const {
        authResponse: { authenticateUser: authenticatedUser },
        logoutResponse,
      } = yield race({
        authResponse: call(authorize, {
          mobile,
          password,
          isRegistering: false,
        }),
        logoutResponse: take(LOGOUT),
      });

      if (authenticatedUser) {
        yield saveTokens({
          refreshToken: authenticatedUser.refresh_token,
          accessToken: authenticatedUser.token,
          accessTokenExpiresAt: parseJwt(authenticatedUser.token).iat,
        });
        yield call(setStorageItem, 'userId', authenticatedUser.user_id);
        yield put(stopSubmit());
        yield put(logUserIn(authenticatedUser));
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

        yield call(forwardTo, redirectToRoute);
      }
    } catch (error) {
      yield put(stopSubmit(extractError(error)));
    }
  }
}

export function* authorize({ name, mobile, email, password, isRegistering }) {
  try {
    let response;
    if (isRegistering) {
      response = yield call(HungerStationAPI.register, {
        name,
        mobile,
        email,
        password,
      });
    } else {
      response = yield call(HungerStationAPI.login, { mobile, password });
    }
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Something went wrong.');
    } else {
      throw error;
    }
  } finally {
    yield put(setAuthState(false));
  }
}

export default function* root() {
  yield fork(loginFlow);
  yield fork(registerFlow);
}
