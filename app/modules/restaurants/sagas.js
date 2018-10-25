import { call, put, select, takeEvery, all } from 'redux-saga/effects';
import { slugify } from 'utils/helpers';
import { fetchLocationSaga } from 'modules/location/sagas';
import { submitSearchQuery } from 'modules/location/actions';
import { startSubmit, stopSubmit } from 'hocs/withFormState/actions';
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
  resetCusinesAction,
} from './actions';
import restaurantsApi from './api';
import {
  selectRestaurantsArray,
  selectSearchString,
  selectChosenFilters,
} from './selectors';
import { RESTAURANT_STATUSES } from './constants';

function* fetchRestaurantsFromSearchBarSaga({
  payload: { history, selectedCity, selectedDistrict },
}) {
  yield put(startSubmit());
  yield call(fetchRestaurantsSaga, {
    payload: { localId: parseInt(selectedDistrict.get('id'), 10) },
  });

  const cityName = slugify(selectedCity.get('name'));
  const districtName = slugify(selectedDistrict.get('name'));
  const path = `/restaurants/${cityName}/${districtName}`;

  history.push(path);

  yield put(stopSubmit());
}

export function* fetchRestaurantsSaga({ payload }) {
  const callParams = {};
  callParams.localId = payload.localId
    ? payload.localId
    : yield call(fetchLocationSaga, { payload });

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
    throw e;
  }
}

export function* fetchDeliveriesFiltersSaga() {
  try {
    const { delivery_filters } = yield call(restaurantsApi.getDeliveryFilters);
    yield put(fetchDeliveryFiltersSuccessAction(delivery_filters));
  } catch (e) {
    throw e;
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
  yield takeEvery(submitSearchQuery.type, fetchRestaurantsFromSearchBarSaga);
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
      resetCusinesAction.type,
    ],
    filterRestaurantListSaga,
  );
}
