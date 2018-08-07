import { call, all, takeEvery } from 'redux-saga/effects';
import { request } from 'graphql-request';

import { BASE_URL } from 'utils/graphql';
import { userQuery } from 'utils/graphql/queries';

import { LOG_USER_IN } from './constants';

function* logUserIn() {
  try {
    const userVariables = {
      id: 7,
    };
    const { User } = yield call(request, BASE_URL, userQuery, userVariables);
    console.log('** User', User);
  } catch (error) {
    console.log('** error', error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(LOG_USER_IN, logUserIn)]);
}
