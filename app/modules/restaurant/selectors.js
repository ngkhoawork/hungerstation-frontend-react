import { initialState } from './reducer';

export const selectRestaurantState = state =>
  state.get('restaurant', initialState).toJS();
