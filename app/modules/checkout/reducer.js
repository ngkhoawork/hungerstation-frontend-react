import {
  selectDeliveryOption,
  selectPaymentOption,
  removeCoupon,
  fetchDeliveryOptionsSuccess,
  fetchCreditCardsSuccess,
  validateCouponSuccess,
  validateCouponError,
} from './actions';

export const initialState = {
  selectedPaymentOption: { cash: true },
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case selectDeliveryOption.type:
      return Object.assign({}, state, { selectedDeliveryOption: payload });

    case selectPaymentOption.type:
      return Object.assign({}, state, { selectedPaymentOption: payload });

    case fetchDeliveryOptionsSuccess.type: {
      const { options, default_option } = payload;

      return Object.assign({}, state, {
        deliveryOptions: options,
        selectedDeliveryOption: default_option
          ? options.find(({ key }) => key === default_option)
          : null,
      });
    }

    case fetchCreditCardsSuccess.type:
      return Object.assign({}, state, { cards: payload });

    case validateCouponSuccess.type:
      return Object.assign({}, state, {
        coupon: { ...payload, isValid: true },
      });

    case validateCouponError.type:
      return Object.assign({}, state, {
        coupon: { ...payload, isValid: false },
      });

    case removeCoupon.type:
      return Object.assign({}, state, { coupon: null });

    default:
      return state;
  }
}

export default reducer;
