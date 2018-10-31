import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectAddressState = state => state.get('address', initialState);

export const selectAddresses = createSelector(
  selectAddressState,
  state => state.addresses,
);

export const selectPrimaryAddress = createSelector(
  selectAddressState,
  state => state.primaryAddress,
);
