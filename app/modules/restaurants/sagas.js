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
  resetChosenFiltersAction,
  discartFiltersToSavedStageAction,
  changeOrderFilterAction,
} from './actions';
import restaurantsApi from './api';
import {
  selectRestaurantsArray,
  selectSearchString,
  selectChosenFilters,
} from './selectors';
import { RESTAURANT_STATUSES } from './constants';

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
        // TODO delete hardcoded
        lat: 24.7706825,
        lng: 46.6627549,
        // ...callParams,
      }),
      call(fetchDeliveriesFiltersSaga),
    ]);

    const restaurants = deliveries.map(item => ({
      id: item.branch.restaurant.id,
      name: item.branch.restaurant.name,
      logo: item.branch.restaurant.logo,
      rateAverage: item.branch.restaurant.rate_average,
      minOrder: item.minimum_order,
      deliveryTime: item.delivery_estimation_time,
      deliveryProvider: item.delivery_provider,
      deliveryFee: item.delivery_fee,
      status: item.branch.status,
      hasPromotion: item.branch.has_promotion,
      kitchensIds: item.branch.restaurant.kitchens.map(({ id }) => id),
      kitchensNames: item.branch.restaurant.kitchens.map(({ name }) => name),
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
  const chosenDeliveryOption = chosenFilters.get('delivery_option');
  const chosenMinOrderValue = chosenFilters.get('min_order');
  // const chosenDeliveryTime = chosenFilters.get('delivery_time');

  const regex = new RegExp(lowerCase(searchString));

  let sortByStatusState = {
    ready: [],
    busy: [],
    soon: [],
    closed: [],
  };
  function reduceByStatus(state, status, id, hasPromotion) {
    switch (status) {
      case RESTAURANT_STATUSES[status]:
        return {
          ...state,
          // we need to view promoted items first for every restaturant status
          [status]: hasPromotion
            ? [id, ...state[status]]
            : [...state[status], id],
        };
      default:
        return state;
    }
  }

  allRestaurantsInArea.forEach(
    ({
      id,
      name,
      kitchensIds, // deliveryTime,
      minOrder,
      deliveryProvider,
      status,
      hasPromotion,
    }) => {
      // checking for time estimation and minimum order quantities
      const isOrderFiltersPassing =
        // deliveryTime <= chosenDeliveryTime &&
        minOrder <= chosenMinOrderValue;
      // checking for the same items in two arr (intersection)
      // in chosen kitchens we got arr of kitchenFilters id
      // in kitchensIds we got arr of kitchensIds related to restaurant
      // so if we got a selected filters we`re checking arrays for intersection
      const isKitchensIntersection = chosenKitchens.length
        ? !!intersection(kitchensIds, chosenKitchens).length
        : true;
      // checking delivery option type
      const isRelevantToDeliveryFilter =
        chosenDeliveryOption === 'all' ||
        chosenDeliveryOption === deliveryProvider;
      // sorting by status and promotion
      sortByStatusState =
        regex.test(lowerCase(name)) &&
        isKitchensIntersection &&
        isRelevantToDeliveryFilter &&
        isOrderFiltersPassing
          ? reduceByStatus(sortByStatusState, status, id, hasPromotion)
          : sortByStatusState;
    },
  );

  yield put(
    updateVisibleRestaurantsAction([
      ...sortByStatusState.ready,
      ...sortByStatusState.busy,
      ...sortByStatusState.soon,
      ...sortByStatusState.closed,
    ]),
  );
}

export default function* watchRestaurantsActionsSaga() {
  yield takeEvery(fetchRestaurantsAction.type, fetchRestaurantsSaga);
  yield takeEvery(fetchDeliveryFiltersAction.type, fetchDeliveriesFiltersSaga);
  yield takeEvery(
    [
      toggleFilterAction.type,
      changeOrderFilterAction.type,
      resetChosenFiltersAction.type,
      discartFiltersToSavedStageAction.type,
      searchRestaurantAction.type,
      updateRestaurantsListing.type,
    ],
    filterRestaurantListSaga,
  );
}
