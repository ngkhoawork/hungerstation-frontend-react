import { call, put, select, takeEvery, all } from 'redux-saga/effects';

import locationApi from 'modules/location/api';

import { intersection, lowerCase } from 'lodash/fp';

import {
  updateRestaurantsListing,
  fetchRestaurantsAction,
  fetchDeliveryFiltersAction,
  fetchDeliveryFiltersSuccessAction,
  toggleFilterAction,
  searchRestaurantAction,
  updateVisibleRestaurantsAction,
} from './actions';
import restaurantsApi from './api';
import {
  selectRestaurantsArray,
  selectSearchString,
  selectChosenFilters,
} from './selectors';

export function* fetchRestaurantsSaga({ payload }) {
  let callParams = {};
  if (payload.districtId) {
    callParams = {
      localId: payload.districtId,
    };
  }

  if (payload.districtSlug) {
    const {
      local: { id },
    } = yield call(locationApi.getDistrictBySlug, {
      slug: payload.districtSlug,
    });

    callParams = {
      localId: parseInt(id, 10),
    };
  }

  if (payload.deliveryType) {
    callParams.deliveryType = payload.deliveryType;
  }

  try {
    const [{ deliveries }] = yield all([
      call(restaurantsApi.getRestaurants, {
        ...callParams,
      }),
      call(fetchDeliveriesFiltersSaga),
    ]);

    const restaurants = deliveries.map(item => ({
      id: item.branch.restaurant.id,
      name: item.branch.restaurant.name,
      rateAverage: item.branch.restaurant.rate_average,
      minOrder: item.minimum_order,
      deliveryTime: item.delivery_estimation_time,
      deliveryFee: item.delivery_fee,
      status: item.branch.status,
      kitchensIds: item.branch.restaurant.kitchens.map(kitchen => kitchen.id),
    }));

    yield put(updateRestaurantsListing(restaurants));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchDeliveriesFiltersSaga() {
  try {
    const { delivery_filters } = yield call(restaurantsApi.getDeliveryFilters);
    yield put(fetchDeliveryFiltersSuccessAction(delivery_filters));
  } catch (e) {
    console.log(e);
  }
}

export function* filterRestaurantListSaga() {
  const allRestaurantsInArea = yield select(selectRestaurantsArray);
  const searchString = yield select(selectSearchString);
  const chosenFilters = yield select(selectChosenFilters);
  const chosenKitchens = chosenFilters.get('kitchens').toArray();
  // TODO ask for deliveries filters
  // const chosenDeliveryOptions = chosenFilters.get('delivery_options').toArray();
  const chosenMinOrderValue = chosenFilters.get('min_order');
  const chosenDeliveryTime = chosenFilters.get('delivery_time');

  const regex = new RegExp(lowerCase(searchString));

  const filteredIds = allRestaurantsInArea.reduce(
    (acc, { id, name, kitchensIds, deliveryTime, minOrder }) => {
      // checking for time estimation and minimum order quantities
      const isOrderFiltersPassing =
        deliveryTime <= chosenDeliveryTime && minOrder <= chosenMinOrderValue;
      // checking for the same items in two arr (intersection)
      // in chosen kitchens we got arr of kitchenFilters id
      // in kitchensIds we got arr of kitchensIds related to restaurant
      // so if we got a selected filters we`re checking arrays for intersection
      const isKitchensIntersection = chosenKitchens.length
        ? !!intersection(kitchensIds, chosenKitchens).length
        : true;

      return regex.test(lowerCase(name)) &&
        isKitchensIntersection &&
        isOrderFiltersPassing
        ? [...acc, id]
        : acc;
    },
    [],
  );

  yield put(updateVisibleRestaurantsAction(filteredIds));
}

export default function* watchRestaurantsActionsSaga() {
  yield takeEvery(fetchRestaurantsAction.type, fetchRestaurantsSaga);
  yield takeEvery(fetchDeliveryFiltersAction.type, fetchDeliveriesFiltersSaga);
  yield takeEvery(
    [toggleFilterAction.type, searchRestaurantAction.type],
    filterRestaurantListSaga,
  );
}
