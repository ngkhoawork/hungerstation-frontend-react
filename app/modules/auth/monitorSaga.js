import { takeEvery, race, take, put } from 'redux-saga/effects';
import { loginAction, registerAction } from 'modules/user/actions';

import {
  userTokenRefreshRequest,
  userTokenRefreshSuccess,
  userTokenRefreshFailure,
  userLogoutRequest,
} from './tokenActions';

const ignoreActionTypes = [
  'TOKEN_REFRESH',
  loginAction.type,
  registerAction.type,
];

function monitorableAction(action) {
  return (
    action.type.includes('REQUEST') &&
    ignoreActionTypes.every(fragment => !action.type.includes(fragment))
  );
}

function identifyAction(action) {
  return action.type
    .split('_')
    .slice(0, -1)
    .join('_');
}
function getSuccessType(action) {
  return `${identifyAction(action)}_SUCCESS`;
}
function getFailType(action) {
  return `${identifyAction(action)}_FAILURE`;
}

function* monitor(monitoredAction) {
  const { fail } = yield race({
    success: take(getSuccessType(monitoredAction)),
    fail: take(getFailType(monitoredAction)),
  });

  if (fail && fail.payload && fail.payload.code === 401) {
    yield put(userTokenRefreshRequest());

    const { success } = yield race({
      success: take(userTokenRefreshSuccess().type),
      fail: take(userTokenRefreshFailure().type),
    });

    if (success) {
      yield put(monitoredAction);
    } else {
      yield put(userLogoutRequest());
    }
  }
}

export default function*() {
  yield takeEvery(monitorableAction, monitor);
}
