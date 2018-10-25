import { createSelector } from 'reselect';
import { keyBy, pick, values, flow, find } from 'lodash/fp';
import { initialState } from './reducer';

/**
 * Direct selector to the restaurantsListContainer state domain
 */

const selectRestaurantDomain = state => state.get('restaurants', initialState);

export const selectRestaurants = createSelector(
  selectRestaurantDomain,
  restaurantsState => restaurantsState.get('restaurants'),
);

export const selectRestaurantsArray = createSelector(
  selectRestaurantDomain,
  restaurantsState => restaurantsState.get('restaurants').toJS(),
);

const selectVisibleRestaurantsIds = createSelector(
  selectRestaurantDomain,
  restaurantsState => restaurantsState.get('visibleRestaurantsIds'),
);

export const selectVisibleRestaurants = createSelector(
  selectRestaurants,
  selectVisibleRestaurantsIds,
  (restaurants, ids) =>
    ids.reduce((acc, curr) => {
      const el = restaurants.find(({ id }) => id === curr);
      return el ? [...acc, el] : acc;
    }, []),
);

// FILTERS
export const selectFilters = createSelector(
  selectRestaurantDomain,
  restaurantsState => restaurantsState.get('filters').toJS(),
);

export const selectSearchString = createSelector(
  selectRestaurantDomain,
  restaurantsState => restaurantsState.get('search'),
);

export const selectChosenFilters = createSelector(
  selectRestaurantDomain,
  restaurantsState => restaurantsState.get('chosenFilters'),
);

export const selectChosenKitchenFiltersArray = createSelector(
  selectChosenFilters,
  chosenFiltersMap => chosenFiltersMap.get('kitchens').toArray(),
);

export const selectChosenDeliveryOption = createSelector(
  selectChosenFilters,
  chosenFiltersMap => chosenFiltersMap.get('delivery_option'),
);

export const selectChosenMinOrder = createSelector(
  selectChosenFilters,
  chosenFiltersMap => chosenFiltersMap.get('min_order'),
);

export const selectChosenDeliveryTime = createSelector(
  selectChosenFilters,
  chosenFiltersMap => chosenFiltersMap.get('delivery_time'),
);

const pickArrayElementsByIds = ids =>
  flow(
    keyBy('id'),
    pick(ids),
    values,
  );

export const selectDynamicFilters = createSelector(
  selectFilters,
  selectChosenKitchenFiltersArray,
  selectChosenDeliveryOption,
  ({ kitchens, delivery_options }, kitchensIds, deliveryOption) => {
    /* eslint-disable */
    const dynamicKitchensNames = kitchensIds.length
      ? pickArrayElementsByIds(kitchensIds)(kitchens).reduce(
          (acc, { name }) => [...acc, name],
          [],
        )
      : ['All Cuisines'];
    /* eslint-anable */

    const dynamicDeliveryOption =
      deliveryOption === 'all'
        ? 'All Delivery Types'
        : find({ type: deliveryOption }, delivery_options).name;
    return [...dynamicKitchensNames, dynamicDeliveryOption];
  },
);
export { selectRestaurantDomain };
