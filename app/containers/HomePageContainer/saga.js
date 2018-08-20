import { take, call, fork, put } from 'redux-saga/effects';

import HungerStationAPI from 'api/HungerStationAPI';
import { REQUEST_CITIES, SELECT_CITY } from './constants';
import { setCitiesAction, setDistrictsAction } from './actions';

function* getCitiesFlow() {
  while (true) {
    yield take(REQUEST_CITIES);
    const response = yield call(HungerStationAPI.getCities);
    yield put(setCitiesAction(response));
  }
}

function* selectCityFlow() {
  while (true) {
    const { selectedCity } = yield take(SELECT_CITY);
    const response = yield call(HungerStationAPI.getDistricts, selectedCity);
    yield put(setDistrictsAction(response));
  }
}

// Individual exports for testing
export default function* root() {
  yield fork(getCitiesFlow);
  yield fork(selectCityFlow);
}
