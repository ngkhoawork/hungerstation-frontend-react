import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCartContainerState = state =>
  state.get('CartContainer', initialState).toJS();

export const selectCartPurchases = createSelector(
  selectCartContainerState,
  state => Object.values(state.purchases),
);

export const selectCartPurchasesQuantities = createSelector(
  selectCartContainerState,
  state => state.quantities,
);

export const selectOrderAmount = createSelector(
  selectCartContainerState,
  state => state.orderAmount,
);
