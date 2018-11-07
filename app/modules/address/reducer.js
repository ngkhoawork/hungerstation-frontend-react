import findIndex from 'lodash/findIndex';
import {
  addressRequest,
  fetchAddressesSuccess,
  saveAddressSuccess,
  addressError,
  setPrimaryAddress,
} from './actions';

export const initialState = {};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case addressRequest.type:
      return Object.assign({}, state, { isLoading: true });

    case fetchAddressesSuccess.type:
      return Object.assign({}, state, {
        isLoading: false,
        addresses: payload,
        primaryAddress: payload[0],
      });

    case saveAddressSuccess.type: {
      let addresses;
      const index = findIndex(state.addresses, ({ id }) => id === payload.id);
      const isCreateAction = index === -1;

      if (isCreateAction) {
        addresses = [payload].concat(state.addresses);
      } else {
        addresses = state.addresses
          .slice(0, index)
          .concat(payload)
          .concat(state.addresses.slice(index + 1));
      }

      return Object.assign({}, state, {
        isLoading: false,
        addresses,
        primaryAddress: isCreateAction
          ? addresses[0]
          : addresses.find(({ id }) => id === state.primaryAddress.id),
      });
    }

    case setPrimaryAddress.type:
      return Object.assign({}, state, { primaryAddress: payload });

    case addressError.type:
      return Object.assign({}, state, { isLoading: false });

    default:
      return state;
  }
}

export default reducer;
