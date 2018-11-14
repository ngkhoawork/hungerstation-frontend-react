import {
  selectDeliveryOption,
  selectPaymentOption,
  removeCoupon,
  fetchDeliveryOptionsSuccess,
  fetchCreditCardsSuccess,
  validateCouponSuccess,
  validateCouponError,
  createOrderSuccess,
  setNote,
} from './actions';

export const initialState = {
  selectedPaymentOption: { cash: true },
  note: '',
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case selectDeliveryOption.type:
      return Object.assign({}, state, { selectedDeliveryOption: payload });

    case selectPaymentOption.type:
      return Object.assign({}, state, { selectedPaymentOption: payload });

    case fetchDeliveryOptionsSuccess.type: {
      const { options, default_option } = payload;
      let selectedDeliveryOption = default_option
        ? options.find(({ key }) => key === default_option)
        : undefined;

      if (options.length === 1) [selectedDeliveryOption] = options;

      return Object.assign({}, state, {
        deliveryOptions: options,
        selectedDeliveryOption,
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
      return Object.assign({}, state, { coupon: undefined });

    case createOrderSuccess.type:
      return Object.assign({}, state, { order: payload });

    case setNote.type:
      return Object.assign({}, state, { note: payload });

    default:
      return state;
  }
}

export default reducer;
