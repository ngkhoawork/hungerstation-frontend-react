import {
  addressRequest,
  fetchAddressesSuccess,
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

    case setPrimaryAddress.type:
      return Object.assign({}, state, { primaryAddress: payload });

    case addressError.type:
      return Object.assign({}, state, { isLoading: false });

    default:
      return state;
  }
}

export default reducer;
