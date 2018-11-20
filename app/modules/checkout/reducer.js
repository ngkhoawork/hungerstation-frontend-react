import {
  selectDeliveryOption,
  selectPaymentOption,
  setCoupon,
  removeCoupon,
  fetchDeliveryOptionsSuccess,
  fetchCreditCardsSuccess,
  validateOrderRequest,
  validateOrderSuccess,
  validateOrderError,
  createOrderSuccess,
  setNote,
} from './actions';

export const initialState = {
  selectedPaymentOption: { id: 'cash' },
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

    case validateOrderRequest.type:
      return Object.assign({}, state, { isLoadingOrderValidate: true });

    case validateOrderSuccess.type:
      return Object.assign({}, state, {
        isLoadingOrderValidate: false,
        orderErrors: null,
        discount: payload.discount,
        coupon: { value: payload.coupon, isValid: true },
      });

    case validateOrderError.type:
      return Object.assign({}, state, {
        isLoadingOrderValidate: false,
        orderErrors: payload.errors_with_keys,
        coupon: { value: payload.coupon, isValid: false },
      });

    case setCoupon.type:
      return Object.assign({}, state, { coupon: { value: payload } });

    case removeCoupon.type:
      return Object.assign({}, state, { coupon: undefined, discount: 0 });

    case setNote.type:
      return Object.assign({}, state, { note: payload });

    case createOrderSuccess.type:
      return Object.assign({}, initialState);

    default:
      return state;
  }
}

export default reducer;
