import { call, put, select, takeEvery } from 'redux-saga/effects';
import { makeSelectSearchType } from 'containers/SearchTypeContainer/selectors';

import { updateRestaurantsListing, fecthRestaurantsAction } from './actions';
import restaurantsApi from './api';

export function* fetchRestaurantsSaga() {
  const deliveryType = yield select(makeSelectSearchType);
  try {
    const { deliveries } = yield call(restaurantsApi.getRestaurants, {
      lat: 24.7706825,
      lng: 46.6627549,
      deliveryType,
    });

    const restaurants = deliveries.map(item => item.branch.restaurant);

    yield put(updateRestaurantsListing(restaurants));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchRestaurantsActionsSaga() {
  yield takeEvery(fecthRestaurantsAction.type, fetchRestaurantsSaga);
}
