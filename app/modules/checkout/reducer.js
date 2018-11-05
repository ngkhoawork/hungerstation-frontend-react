import {
  selectDeliveryOption,
  selectPaymentOption,
  setCoupon,
} from './actions';

export const initialState = {};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case selectDeliveryOption.type:
      return Object.assign({}, state, { selectedDeliveryOption: payload });

    case selectPaymentOption.type:
      return Object.assign({}, state, { selectedPaymentOption: payload });

    case setCoupon.type:
      return Object.assign({}, state, {
        coupon: {
          ...payload,
          id: payload && 1,
          value: 12,
          isValid: payload && Date.now() % 2 === 0,
        },
      });

    default:
      return state;
  }
}

export default reducer;
