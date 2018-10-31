import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectRestaurantState = state =>
  state.get('restaurant', initialState).toJS();

export const selectRestaurantName = createSelector(
  selectRestaurantState,
  state => state.restaurant.name,
);

export const selectRestaurantCoords = createSelector(
  selectRestaurantState,
  ({ restaurant }) => ({ lat: restaurant.latitude, lng: restaurant.longitude }),
);
