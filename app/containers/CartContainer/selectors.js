import { createSelector } from 'reselect';
import values from 'lodash/values';
import { initialState } from './reducer';

const selectCartContainerState = state =>
  state.get('cart', initialState).toJS();

export const selectCartPurchases = createSelector(
  selectCartContainerState,
  state => values(state.purchases),
);

export const selectOrderAmount = createSelector(
  selectCartPurchases,
  purchases => purchases.reduce((sum, { price }) => sum + price, 0),
);

export const selectDiscount = createSelector(
  selectCartContainerState,
  state => state.discount,
);
