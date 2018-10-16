import { takeEvery, race, call, put, take } from 'redux-saga/effects';

import { saveTokens } from 'modules/common/sagas';
import { setCurrentUser, logout, setAuthState } from 'modules/auth/actions';
import { LOGOUT } from 'modules/auth/constants';

import { setStorageItem } from 'utils/localStorage';
import { parseJwt } from 'utils/tokens';
import { extractError } from 'utils/helpers';
import { forwardTo } from 'utils/route';
import { startSubmit, stopSubmit } from 'hocs/withFormState/actions';

import { loginAction, registerAction } from './actions';
import usersApi from './api';

export function* loginFlow({ payload, meta: redirectToRoute }) {
  const { mobile, password } = payload;
  try {
    yield put(startSubmit());
    const {
      authResponse: { authenticateUser: authenticatedUser },
      logoutResponse,
    } = yield race({
      authResponse: call(authorizeSaga, {
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
      yield call(setStorageItem, 'userId', authenticatedUser.user.id);
      yield put(stopSubmit());
      yield put(setCurrentUser(authenticatedUser));
      yield call(forwardTo, redirectToRoute);
    }

    if (logoutResponse) {
      yield put(logout(logoutResponse));
    }
  } catch (error) {
    yield put(stopSubmit(extractError(error)));
  }
}

export function* registerFlow({ payload }) {
  const { name, mobile, email, password, redirectToRoute } = payload;
  try {
    yield put(startSubmit());

    const { createUser: response } = yield call(authorizeSaga, {
      name,
      mobile,
      email,
      password,
      isRegistering: true,
    });

    if (response && response.user) {
      yield saveTokens({
        refreshToken: response.refresh_token,
        accessToken: response.token,
        accessTokenExpiresAt: parseJwt(response.token).iat,
      });
      yield call(setStorageItem, 'userId', response.user.id);
      yield put(stopSubmit());
      yield put(setCurrentUser(response));
      yield call(forwardTo, redirectToRoute);
    }
  } catch (error) {
    yield put(stopSubmit(extractError(error)));
  }
}

export function* authorizeSaga({
  name,
  mobile,
  email,
  password,
  isRegistering,
}) {
  try {
    let response;
    if (isRegistering) {
      response = yield call(usersApi.register, {
        name,
        mobile,
        email,
        password,
      });
    } else {
      response = yield call(usersApi.login, { mobile, password });
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
  yield takeEvery(loginAction.type, loginFlow);
  yield takeEvery(registerAction.type, registerFlow);
}
