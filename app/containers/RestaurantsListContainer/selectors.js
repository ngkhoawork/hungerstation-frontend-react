import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the restaurantsListContainer state domain
 */

const selectRestaurantsListContainerDomain = state =>
  state.get('restaurantsListContainer', initialState);

export const makeSelectRestaurants = createSelector(
  selectRestaurantsListContainerDomain,
  restaurantsState => {
    const output = restaurantsState && restaurantsState.get('restaurants');

    if (output) {
      return output.toJS();
    }
    return null;
  },
);

export { selectRestaurantsListContainerDomain };
