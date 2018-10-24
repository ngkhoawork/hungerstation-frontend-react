import { fork } from 'redux-saga/effects';
import authSagas from './auth/sagas';
import userSagas from './user/sagas';
import locationSagas from './location/sagas';
import restaurantSagas from './restaurant/sagas';
import restaurantsSagas from './restaurants/sagas';

export default function* root() {
  yield fork(authSagas);
  yield fork(userSagas);
  yield fork(locationSagas);
  yield fork(restaurantsSagas);
  yield fork(restaurantSagas);
  // yield spawn(monitorSaga);
}
