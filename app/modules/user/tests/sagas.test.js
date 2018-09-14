/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, put, race, call } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'containers/Form/actions';
import { logUserIn } from 'containers/App/authActions';
import { parseJwt } from 'utils/tokens';
import { setStorageItem } from 'utils/localStorage';
import { forwardTo } from 'utils/route';

import { LOGOUT } from 'containers/App/authConstants';

import { loginFlow } from '../sagas';
import { saveTokens } from '../../common/sagas';
import { LOGIN_REQUEST } from '../constants';

const gen = loginFlow();

describe('defaultSaga Saga', () => {
  const payload = {
    mobile: '123456789',
    password: '123456789',
    redirectToRoute: '/restaurants',
  };
  const authenticateUser = {
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    user_id: '1234',
  };

  it('Expect to take LOGIN_REQUEST action', () => {
    expect(gen.next().value).toEqual(take(LOGIN_REQUEST));
  });

  it('Expect to receive payload from LOGIN_REQUEST action', () => {
    expect(gen.next(payload).value).toEqual(put(startSubmit()));
  });

  it('Expect to race for one of the result', () => {
    const authorize = () =>
      new Promise(res => {
        res({ authenticateUser });
      });
    expect(gen.next().value).toEqual(
      race({
        authResponse: call(authorize, {
          mobile: payload.mobile,
          password: payload.password,
          isRegistering: false,
        }),
        logoutResponse: take(LOGOUT),
      }),
    );
  });

  it('Expect to save user tokens', () => {
    expect(
      gen.next({ authResponse: { authenticateUser }, logoutResponse: null })
        .value,
    ).toEqual(
      saveTokens({
        refreshToken: authenticateUser.refresh_token,
        accessToken: authenticateUser.token,
        accessTokenExpiresAt: parseJwt(authenticateUser.token).iat,
      }),
    );
  });

  it('Expect to save user information into the storage', () => {
    expect(gen.next().value).toEqual(
      call(setStorageItem, 'userId', authenticateUser.user_id),
    );
  });

  it('Expect to terminate submission', () => {
    expect(gen.next().value).toEqual(put(stopSubmit()));
  });

  it('Expect to update store with user values', () => {
    expect(gen.next().value).toEqual(put(logUserIn(authenticateUser)));
  });

  it('Expect to redirect user to restaurant page', () => {
    expect(gen.next().value).toEqual(call(forwardTo, payload.redirectToRoute));
  });
});
