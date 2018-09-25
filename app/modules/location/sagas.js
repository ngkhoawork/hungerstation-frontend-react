import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getUserPosition, getSettlementDetails, getUnit } from 'utils/location';
import locationApi from './api';

import {
  getCitiesAction,
  getCurrentLocationAction,
  setCitiesAction,
  setDistrictsAction,
  setSettlementDetailsAction,
  toggleSettlementLoadedAction,
  selectCityAction,
  selectDistrictAction,
} from './actions';
import { selectCities } from './selectors';

function* getCitiesFlow() {
  const cachedCities = yield select(selectCities);

  if (!cachedCities.size) {
    const { listCities } = yield call(locationApi.getCities, 1);
    const districtsMap = {};

    const cities = listCities.map(({ id, districts, name }) => {
      districtsMap[id] = districts;
      return { name, id };
    });

    yield put(setCitiesAction(cities));
    yield put(setDistrictsAction(districtsMap));
  }
}

function* selectCityFlow() {
  yield put(selectDistrictAction(null));
}

function* getCurrentLocationFlow() {
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

// Individual exports for testing
export default function* watchLocationActionsSaga() {
  yield takeEvery(getCitiesAction.type, getCitiesFlow);
  yield takeEvery(selectCityAction.type, selectCityFlow);
  yield takeEvery(getCurrentLocationAction.type, getCurrentLocationFlow);
}
