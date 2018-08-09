// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { hashSync } from 'bcryptjs';
import { take, call, put, fork } from 'redux-saga/effects';
import { request as graphRequest } from 'graphql-request';

import { BASE_URL } from 'utils/graphql';
import { userQuery } from 'utils/graphql/queries';

import auth from './authApi';
import genSalt from '../../utils/salt';
import history from '../../createHistory';

import {
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  SET_AUTH,
  LOGOUT,
  REQUEST_ERROR,
} from './authConstants';

/**
 * Effect to handle authorization
 * @param  {string} username               The username of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
export function* authorize({ username, password, isRegistering }) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  // We then try to register or log in the user, depending on the request
  try {
    const salt = genSalt(username);
    const hash = hashSync(password, salt);
    let response;

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(auth.register, username, hash);
    } else {
      response = yield call(auth.login, username, hash);
    }

    return response;
  } catch (error) {
    // If we get an error we send Redux the appropiate action and return
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

/**
 * Effect to handle logging out
 */
/* eslint-disable consistent-return */
export function* logout() {
  // We tell Redux we're in the middle of a request
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const response = yield call(auth.logout);
    yield put({ type: SENDING_REQUEST, sending: false });
    console.log('logout saga response', response);
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });
  }
}
/* eslint-enable consistent-return */

/**
 * Log in saga
 */
export function* loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const request = yield take(LOGIN_REQUEST);
    console.log('** request', request);
    const { number, password } = request;

    console.log('** number', number);
    console.log('** password', password);

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first

    // const winner = yield race({
    //   auth: call(authorize, { username, password, isRegistering: false }),
    //   logout: take(LOGOUT),
    // });

    const userVariables = {
      id: 7,
    };

    const { User } = yield call(
      graphRequest,
      BASE_URL,
      userQuery,
      userVariables,
    );

    // If `authorize` was the winner...
    // if (winner.auth) {
    if (User.id) {
      // ...we send Redux appropiate actions
      yield put({ type: SET_AUTH, newAuthState: true }); // User is logged in (authorized)
      yield call(forwardTo, request.redirectToRoute); // Go to dashboard page
    }
  }
}

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
export function* logoutFlow() {
  while (true) {
    yield take(LOGOUT);
    yield put({ type: SET_AUTH, newAuthState: false });

    yield call(logout);
    yield call(forwardTo, '/');
  }
}

/**
 * Register saga
 * Very similar to log in saga!
 */
export function* registerFlow() {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take(REGISTER_REQUEST);
    const { username, password } = request.data;

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    const wasSuccessful = yield call(authorize, {
      username,
      password,
      isRegistering: true,
    });

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put({ type: SET_AUTH, newAuthState: true }); // User is logged in (authorized) after being registered
      yield call(forwardTo, '/dashboard');
    }
  }
}

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* root() {
  yield fork(loginFlow);
  yield fork(logoutFlow);
  yield fork(registerFlow);
}

// Little helper function to abstract going to different pages
function forwardTo(location) {
  history.push(location);
}
