import { spawn } from 'redux-saga/effects';
import authSagas from 'containers/App/authSagas';
import userSagas from './user/sagas';

export default function* root() {
  yield spawn(authSagas);
  yield spawn(userSagas);
  // yield spawn(monitorSaga);
}
