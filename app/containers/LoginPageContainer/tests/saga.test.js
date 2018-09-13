/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, put } from 'redux-saga/effects';
import { startSubmit } from 'containers/Form/actions';

import { loginFlow } from '../saga';
import { LOGIN_REQUEST } from '../constants';
import { loginRequest } from '../actions';

const gen = loginFlow();

describe('defaultSaga Saga', () => {
  const payload = {
    mobile: '123456789',
    password: '123456789',
    redirectToRoute: '/restaurants',
  };

  it('Expect to take LOGIN_REQUEST action', () => {
    expect(gen.next().value).toEqual(take(LOGIN_REQUEST));
  });

  it('Expect to receive payload from LOGIN_REQUEST action', () => {
    expect(gen.next(loginRequest(payload)).value).toEqual(put(startSubmit()));
  });
});
