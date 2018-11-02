import createAction from 'utils/actions/createAction';

export const selectDeliveryOption = createAction(
  'checkout/SELECT_DELIVERY_OPTION',
  payload => payload,
);

export const selectPaymentOption = createAction(
  'checkout/SELECT_PAYMENT_OPTION',
  payload => payload,
);

export const setCoupon = createAction(
  'checkout/SET_COUPON',
  payload => payload,
);
