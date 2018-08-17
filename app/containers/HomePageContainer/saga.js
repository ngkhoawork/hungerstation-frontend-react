import { take, call, fork, put } from 'redux-saga/effects';

import { getUserPosition, getSettlementDetails, getUnit } from 'utils/location';

import HungerStationAPI from 'api/HungerStationAPI';
import { REQUEST_CITIES, SELECT_CITY, GET_CURRENT_LOCATION } from './constants';
import {
  setCitiesAction,
  setDistrictsAction,
  setSettlementDetailsAction,
} from './actions';

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

function* getCurrentLocationFlow() {
  while (true) {
    yield take(GET_CURRENT_LOCATION);
    const { coords } = yield call(getUserPosition);
    const { results } = yield call(getSettlementDetails, coords);
    const { long_name: city } = getUnit(
      results[0].address_components,
      'locality',
    );
    const { long_name: district } = getUnit(
      results[0].address_components,
      'sublocality',
    );

    yield put(setSettlementDetailsAction(city, district));
  }
}

// Individual exports for testing
export default function* root() {
  yield fork(getCitiesFlow);
  yield fork(selectCityFlow);
  yield fork(getCurrentLocationFlow);
}
