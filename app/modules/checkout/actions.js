import createAction from 'utils/actions/createAction';

export const checkoutRequest = createAction('checkout/REQUEST');

export const checkoutError = createAction('checkout/ERROR');

export const fetchDeliveryOptions = createAction(
  'checkout/FETCH_DELIVERY_OPTIONS',
  payload => payload,
);

export const fetchDeliveryOptionsSuccess = createAction(
  'checkout/FETCH_DELIVERY_OPTIONS_SUCCESS',
  payload => payload,
);

export const fetchCreditCards = createAction(
  'checkout/FETCH_CREDIT_CARDS',
  payload => payload,
);

export const fetchCreditCardsSuccess = createAction(
  'checkout/FETCH_CREDIT_CARDS_SUCCESS',
  payload => payload,
);

export const validateOrder = createAction(
  'checkout/VALIDATE_ORDER',
  payload => payload,
);

export const validateOrderSuccess = createAction(
  'checkout/VALIDATE_ORDER_SUCCESS',
  payload => payload,
);

export const selectDeliveryOption = createAction(
  'checkout/SELECT_DELIVERY_OPTION',
  payload => payload,
);

export const selectPaymentOption = createAction(
  'checkout/SELECT_PAYMENT_OPTION',
  payload => payload,
);

export const setNote = createAction('checkout/SET_NOTE', payload => payload);

export const createOrder = createAction(
  'checkout/CREATE_ORDER',
  payload => payload,
);

export const createOrderRequest = createAction('checkout/CREATE_ORDER_REQUEST');

export const createOrderSuccess = createAction(
  'checkout/CREATE_ORDER_SUCCESS',
  payload => payload,
);

export const setCoupon = createAction(
  'checkout/SET_COUPON',
  payload => payload,
);

export const removeCoupon = createAction('checkout/REMOVE_COUPON');

export const clearCouponError = createAction('checkout/CLEAR_COUPON_ERROR');

export const clearCheckout = createAction('checkout/CLEAR_CHECKOUT');
