import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectRestaurantState = state =>
  state.get('restaurant', initialState).toJS();

export const selectRestaurant = createSelector(
  selectRestaurantState,
  state => state.restaurant,
);
