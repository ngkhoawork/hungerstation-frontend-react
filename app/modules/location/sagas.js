import { call, put, select, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
// import { getUserPosition } from 'utils/location';
import { fetchRestaurantsAction } from 'modules/restaurants/actions';
import { startSubmit, stopSubmit } from 'hocs/withFormState/actions';
// import { fetchDeliveriesFiltersSaga } from 'modules/restaurants/sagas';
import { makeSelectSearchType } from 'containers/SearchTypeContainer/selectors';
import locationApi from './api';

import {
  getCitiesAction,
  getCurrentLocationAction,
  saveCurrentLocationAction,
  setCitiesAction,
  setDistrictsAction,
  setSettlementDetailsAction,
  toggleSettlementLoadedAction,
  selectCityAction,
  selectDistrictAction,
  submitSearchQuery,
} from './actions';
import { selectCities, selectDistrict, selectCity } from './selectors';

function* getCitiesFlow() {
  const cachedCities = yield select(selectCities);

  if (!cachedCities.size) {
    const { cities: listCities } = yield call(locationApi.getCities, 1);
    const districtsMap = {};

    const cities = listCities.map(({ id, locals, name }) => {
      districtsMap[id] = locals;
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
    // const { coords } = yield call(getUserPosition);
    const coords = {
      lat: 24.6378253,
      lng: 46.651656,
      // lat: coords.latitude,
      // lng: coords.longitude,
    };

    yield put(saveCurrentLocationAction(coords));

    const { locals } = yield call(locationApi.getDistrict, coords);
    const [{ name: districtName, id: districtID, city }] = locals;

    if (city && districtID) {
      yield put(
        setSettlementDetailsAction({
          city,
          district: {
            id: districtID,
            name: districtName,
          },
        }),
      );
    } else {
      throw Error(`Unsupported area.`);
    }

    yield put(toggleSettlementLoadedAction(true));
  } catch (error) {
    yield put(toggleSettlementLoadedAction(true));
  }
}

function* fetchRestaurantsFlow({ payload }) {
  const city = yield select(selectCity);
  const district = yield select(selectDistrict);
  const deliveryType = yield select(makeSelectSearchType);

  yield put(startSubmit());
  yield put(
    fetchRestaurantsAction({
      districtId: parseInt(district.get('id'), 10),
      deliveryType,
    }),
  );
  yield call(delay, 500);

  const cityName = city.get('name').trim();
  const districtName = district.get('name').trim();
  const path = `/restaurants/${cityName}/${districtName}/${deliveryType}`
    .toLowerCase()
    .replace(/\s/g, '-');

  payload.history.push(path);

  yield put(stopSubmit());
}

// Individual exports for testing
export default function* watchLocationActionsSaga() {
  yield takeEvery(getCitiesAction.type, getCitiesFlow);
  yield takeEvery(selectCityAction.type, selectCityFlow);
  yield takeEvery(getCurrentLocationAction.type, getCurrentLocationFlow);
  yield takeEvery(submitSearchQuery.type, fetchRestaurantsFlow);
}
