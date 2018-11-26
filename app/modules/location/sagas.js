import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { getUserPosition } from 'utils/location';
import { sortAlphabetically } from 'utils/helpers';
import locationApi from './api';

import {
  getCurrentLocationAction,
  saveCurrentLocationAction,
  setCitiesAction,
  setDistrictsAction,
  setSettlementDetailsAction,
  toggleSettlementLoadedAction,
  saveLocation,
  getLocation,
  getCurrentCityAction,
} from './actions';
import { selectCities, selectCoords } from './selectors';

function* getCitiesSaga() {
  const cachedCities = yield select(selectCities);

  if (!cachedCities.size) {
    const { cities: listCities } = yield call(locationApi.getCities, 1);
    const districtsMap = {};
    const cities = listCities
      .filter(city => city.locals.length)
      .map(({ id, locals, name }) => {
        districtsMap[id] = sortAlphabetically(locals);
        return { name, id };
      });

    yield put(setCitiesAction(cities));
    yield put(setDistrictsAction(districtsMap));
  }
}

function* getUserLocation() {
  try {
    const {
      coords: { latitude: lat, longitude: lng },
    } = yield call(getUserPosition);

    return { lat, lng };
  } catch (e) {
    const { latitude: lat, longitude: lng } = yield select(selectCoords);

    return { lat, lng };
  }
}

function* getCurrentLocationSaga() {
  yield put(toggleSettlementLoadedAction(false));

  const coords = yield getUserLocation();
  const { locals } = yield call(locationApi.getDistrict, coords);

  if (locals.length) {
    const [{ id, name, city }] = locals;

    yield put(saveCurrentLocationAction(coords));
    yield put(setSettlementDetailsAction({ city, district: { id, name } }));
  }

  yield put(toggleSettlementLoadedAction(true));
}

function* getCurrentCitySaga() {
  const coords = yield getUserLocation();
  const { locals } = yield call(locationApi.getDistrict, coords);

  if (locals.length) {
    const [{ city }] = locals;

    yield put(saveCurrentLocationAction(coords));
    yield put(setSettlementDetailsAction({ city, district: null }));
  }
}

export function* fetchLocationSaga({ payload }) {
  try {
    const {
      local: { city, ...local },
    } = yield call(locationApi.getDistrictBySlug, {
      citySlug: payload.city,
      slug: payload.district,
    });

    yield put(saveLocation({ selectedCity: city, selectedDistrict: local }));
  } catch (e) {
    // console.log(e);
  }
}

// Individual exports for testing
export default function* watchLocationActionsSaga() {
  yield takeEvery(getCurrentLocationAction.type, getCurrentLocationSaga);
  yield takeEvery(getCurrentCityAction.type, getCurrentCitySaga);
  yield takeLatest(getLocation.type, fetchLocationSaga);
  yield getCitiesSaga();
}
