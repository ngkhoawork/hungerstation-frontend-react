import { take, call, fork, put, select } from 'redux-saga/effects';
import { getUserPosition, getSettlementDetails, getUnit } from 'utils/location';

import HungerStationAPI from 'api/HungerStationAPI';
import { REQUEST_CITIES, SELECT_CITY, GET_CURRENT_LOCATION } from './constants';
import {
  setCitiesAction,
  setDistrictsAction,
  setSettlementDetailsAction,
  toggleSettlementLoadedAction,
  selectDistrictAction,
} from './actions';
import { makeSelectCities } from './selectors';

function* getCitiesFlow() {
  while (true) {
    yield take(REQUEST_CITIES);
    const cachedCities = yield select(makeSelectCities);

    if (!cachedCities.size) {
      const { listCities } = yield call(HungerStationAPI.getCities, 1);
      const districtsMap = {};

      const cities = listCities.map(({ id, districts, name }) => {
        districtsMap[id] = districts;
        return { name, id };
      });

      yield put(setCitiesAction(cities));
      yield put(setDistrictsAction(districtsMap));
    }
  }
}

function* selectCityFlow() {
  while (true) {
    yield take(SELECT_CITY);
    yield put(selectDistrictAction(null));
  }
}

function* getCurrentLocationFlow() {
  while (true) {
    yield take(GET_CURRENT_LOCATION);
    yield put(toggleSettlementLoadedAction(false));
    try {
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

      yield put(
        setSettlementDetailsAction(
          {
            id: null,
            name: city,
          },
          {
            id: null,
            name: district,
          },
        ),
      );
      yield put(toggleSettlementLoadedAction(true));
    } catch (error) {
      yield put(toggleSettlementLoadedAction(true));
    }
  }
}

// Individual exports for testing
export default function* root() {
  yield fork(getCitiesFlow);
  yield fork(selectCityFlow);
  yield fork(getCurrentLocationFlow);
}
