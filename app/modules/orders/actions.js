import createAction from 'utils/actions/createAction';

export const fetchOrders = createAction(
  'restaurant/FETCH_ORDERS',
  payload => payload,
);

export const fetchOrdersRequest = createAction(
  'restaurant/FETCH_ORDERS_REQUEST',
);

export const fetchOrdersSuccess = createAction(
  'restaurant/FETCH_ORDERS_SUCCESS',
  payload => payload,
);

export const fetchOrdersError = createAction('restaurant/FETCH_ORDERS_ERROR');
