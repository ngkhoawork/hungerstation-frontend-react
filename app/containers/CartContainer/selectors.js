import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCartContainerState = state => state.get('cart', initialState);

export const selectCartPurchases = createSelector(
  selectCartContainerState,
  state => state.purchases,
);

export const selectOrderAmount = createSelector(
  selectCartPurchases,
  purchases => purchases.reduce((sum, { price }) => sum + price, 0),
);

export const selectDiscount = createSelector(
  selectCartContainerState,
  state => state.discount,
);
