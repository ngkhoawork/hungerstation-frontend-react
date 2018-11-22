import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectCartContainerState = state =>
  state.get('cart', initialState);

export const selectCartPurchases = createSelector(
  selectCartContainerState,
  state => state.purchases,
);

export const selectOrderAmount = createSelector(
  selectCartPurchases,
  purchases => purchases.reduce((sum, { price }) => sum + price, 0),
);
