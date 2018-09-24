/* eslint-disable redux-saga/yield-effects */
import { take, put, race, call } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'hocs/withFormState/actions';
import { parseJwt } from 'utils/tokens';
import { setStorageItem } from 'utils/localStorage';
import { forwardTo } from 'utils/route';

import { logUserIn } from 'modules/auth/actions';
import { LOGOUT } from 'modules/auth/constants';

import {
  loginFlow,
  registerFlow,
  authorizeSaga as authorizeFlow,
} from '../sagas';
import { saveTokens } from '../../common/sagas';
import { loginAction, registerAction } from '../actions';

describe('User Sagas', () => {
  const userCredentials = {
    mobile: '123456789',
    password: '123456789',
  };

  const userDetails = {
    name: 'Tom',
    email: 'tom@example.com',
  };

  const userResponse = {
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    user_id: '1234',
  };

  // const authorize = response =>;
  // new Promise(resolve => {
  //   resolve({ response });
  // });
  const authorize = jest.fn();
  describe('Login Flow', () => {
    const gen = loginFlow();
    const payload = {
      ...userCredentials,
      redirectToRoute: '/restaurants',
    };

    it('Expect to take LOGIN_REQUEST action', () => {
      expect(gen.next().value).toEqual(take(loginAction.type));
    });

    it('Expect to start sumission action', () => {
      expect(gen.next(payload).value).toEqual(put(startSubmit()));
    });

    it('Expect to race for one of the result', () => {
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
        gen.next({
          authResponse: { authenticateUser: userResponse },
          logoutResponse: null,
        }).value,
      ).toEqual(
        saveTokens({
          refreshToken: userResponse.refresh_token,
          accessToken: userResponse.token,
          accessTokenExpiresAt: parseJwt(userResponse.token).iat,
        }),
      );
    });

    it('Expect to save user information into the storage', () => {
      expect(gen.next().value).toEqual(
        call(setStorageItem, 'userId', userResponse.user_id),
      );
    });

    it('Expect to terminate submission', () => {
      expect(gen.next().value).toEqual(put(stopSubmit()));
    });

    it('Expect to update store with user values', () => {
      expect(gen.next().value).toEqual(put(logUserIn(userResponse)));
    });

    it('Expect to redirect user to restaurant page', () => {
      expect(gen.next().value).toEqual(
        call(forwardTo, payload.redirectToRoute),
      );
    });
  });

  describe('Register Flow', () => {
    const gen = registerFlow();
    const payload = {
      ...userCredentials,
      ...userDetails,
      redirectToRoute: '/',
    };
    it('Expect to take REGISTER_REQUEST action', () => {
      expect(gen.next().value).toEqual(take(registerAction.type));
    });

    it('Expect to start sumission action', () => {
      expect(gen.next(payload).value).toEqual(put(startSubmit()));
    });

    it('Expect to start authorization flow', () => {
      expect(gen.next().value).toEqual(
        call(authorize, {
          ...userCredentials,
          ...userDetails,
          isRegistering: true,
        }),
      );
    });

    it('Expect to save user tokens', () => {
      expect(gen.next({ createUser: userResponse }).value).toEqual(
        saveTokens({
          refreshToken: userResponse.refresh_token,
          accessToken: userResponse.token,
          accessTokenExpiresAt: parseJwt(userResponse.token).iat,
        }),
      );
    });

    it('Expect to update store with user values', () => {
      expect(gen.next().value).toEqual(put(logUserIn(userResponse)));
    });

    it('Expect to save user information into the storage', () => {
      expect(gen.next().value).toEqual(
        call(setStorageItem, 'userId', userResponse.user_id),
      );
    });

    it('Expect to terminate submission', () => {
      expect(gen.next().value).toEqual(put(stopSubmit()));
    });

    it('Expect to redirect user to restaurant page', () => {
      expect(gen.next().value).toEqual(
        call(forwardTo, payload.redirectToRoute),
      );
    });
  });

  describe('authorize', () => {
    const gen = authorizeFlow({
      ...userCredentials,
      ...userDetails,
      isRegistering: true,
    });

    it('Expect to call API', () => {
      const HungerStationAPI = {
        register: () =>
          new Promise(res => {
            res('success');
          }),
      };
      expect(gen.next().value).toEqual(
        call(HungerStationAPI.register, {
          ...userCredentials,
          ...userDetails,
        }),
      );
    });
  });
});
