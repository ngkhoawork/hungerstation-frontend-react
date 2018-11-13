import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectOrdersState = state =>
  state.get('orders', initialState).toJS();

export const selectOrders = createSelector(
  selectOrdersState,
  state => state.orders,
);
