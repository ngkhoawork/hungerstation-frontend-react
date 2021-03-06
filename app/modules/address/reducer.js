import { logout } from 'modules/auth/actions';
import { createOrderSuccess } from 'modules/checkout/actions';
import {
  addressRequest,
  fetchAddressesSuccess,
  saveAddressSuccess,
  addressError,
  setPrimaryAddress,
  validateAddressRequest,
  validateAddressSuccess,
} from './actions';

export const initialState = {
  addresses: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case addressRequest.type:
      return Object.assign({}, state, { isLoading: true });

    // for both create and edit take the address info from saveAddress's response
    // and set branch_eligibility based on isEligible if it's !== undefined,
    // as otherwise it would've been an edit where e.g. just description was changed.
    // set address as primary if it's create action and isEligible.
    case saveAddressSuccess.type: {
      let { addresses } = state;
      const addr = addresses.find(({ id }) => id === payload.id);
      const index = addresses.indexOf(addr);
      const isEligible =
        state.isEligible !== undefined
          ? state.isEligible
          : !!(addr || {}).branch_eligibility;
      const address = {
        ...payload,
        branch_eligibility: isEligible,
      };

      if (index > -1) {
        addresses = addresses
          .slice(0, index)
          .concat(address)
          .concat(addresses.slice(index + 1));
      } else {
        addresses = [address].concat(addresses);
      }

      const isAlreadyPrimary = (state.primaryAddress || {}).id === address.id;
      let { primaryAddress } = state;

      if (isEligible) {
        if (index === -1 || !state.primaryAddress || isAlreadyPrimary) {
          primaryAddress = address;
        }
      } else if (isAlreadyPrimary) {
        primaryAddress = addresses.find(addr => addr.branch_eligibility);
      }

      return Object.assign({}, state, {
        isLoading: false,
        isEligible: undefined,
        addresses,
        primaryAddress,
      });
    }

    case validateAddressRequest.type:
      return Object.assign({}, state, {
        isValidateLoading: true,
        isEligible: undefined,
      });

    case validateAddressSuccess.type:
      return Object.assign({}, state, {
        isValidateLoading: false,
        isEligible: payload === 'valid',
      });

    case fetchAddressesSuccess.type:
      return Object.assign({}, state, {
        isLoading: false,
        isAddressesInitialized: true,
        addresses: payload,
        primaryAddress: payload.find(addr => addr.branch_eligibility),
      });

    case setPrimaryAddress.type:
      return Object.assign({}, state, { primaryAddress: payload });

    case addressError.type:
      return Object.assign({}, state, {
        isLoading: false,
        isValidateLoading: false,
      });

    case createOrderSuccess.type:
      return Object.assign({}, initialState);

    case logout.type:
      return Object.assign({}, initialState);

    default:
      return state;
  }
}

export default reducer;
