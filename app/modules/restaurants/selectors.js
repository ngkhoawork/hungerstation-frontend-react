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

const selectVisibleRestaurantsIds = createSelector(
  selectRestaurantDomain,
  restaurantsState => restaurantsState.get('visibleRestaurantsIds'),
);

export const selectVisibleRestaurants = createSelector(
  selectRestaurants,
  selectVisibleRestaurantsIds,
  (restaurants, ids) => restaurants.filter(({ id }) => ids.includes(id)),
);

export { selectRestaurantDomain };
