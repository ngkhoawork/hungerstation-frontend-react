import { createSelector } from 'reselect';
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
  (restaurants, ids) => restaurants.filter(({ id }) => ids.includes(id)).toJS(),
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

export const selectChosenDeliveryOptionsArray = createSelector(
  selectChosenFilters,
  chosenFiltersMap => chosenFiltersMap.get('delivery_options').toArray(),
);

export { selectRestaurantDomain };
