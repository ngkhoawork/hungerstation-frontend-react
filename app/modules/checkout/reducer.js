import { logout } from 'modules/auth/actions';
import {
  selectDeliveryOption,
  selectPaymentOption,
  setCoupon,
  removeCoupon,
  fetchDeliveryOptionsSuccess,
  fetchCreditCardsSuccess,
  checkoutRequest,
  validateOrderSuccess,
  checkoutError,
  createOrderRequest,
  createOrderSuccess,
  setNote,
  clearCheckout,
} from './actions';

export const initialState = {
  selectedPaymentOption: { id: 'cash' },
  note: '',
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case checkoutRequest.type:
      return Object.assign({}, state, { isLoading: true });

    case createOrderRequest.type:
      return Object.assign({}, state, { isCreateOrderLoading: true });

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
        isLoading: false,
      });
    }

    case fetchCreditCardsSuccess.type:
      return Object.assign({}, state, { cards: payload, isLoading: false });

    case validateOrderSuccess.type: {
      const { coupon, discount, errors_with_keys } = payload;
      const errors = errors_with_keys || [];
      const couponError = errors.find(({ key }) => key === 'coupon');

      return Object.assign({}, state, {
        isLoading: false,
        isCouponLoading: false,
        isCreateOrderLoading: errors.length
          ? false
          : state.isCreateOrderLoading,
        isValid: !errors.length,
        orderErrors: errors.filter(({ key }) => key !== 'coupon'),
        discount,
        coupon: coupon
          ? { value: coupon || state.coupon, isValid: !couponError }
          : state.coupon,
      });
    }

    case setCoupon.type:
      return Object.assign({}, state, {
        coupon: payload,
        isCouponLoading: !payload.isDisabled && true,
      });

    case removeCoupon.type:
      return Object.assign({}, state, { coupon: undefined, discount: 0 });

    case setNote.type:
      return Object.assign({}, state, { note: payload });

    case checkoutError.type:
      return Object.assign({}, state, {
        isLoading: false,
        isCouponLoading: false,
        isCreateOrderLoading: false,
      });

    case createOrderSuccess.type:
    case clearCheckout.type:
    case logout.type:
      return Object.assign({}, initialState);

    default:
      return state;
  }
}

export default reducer;
