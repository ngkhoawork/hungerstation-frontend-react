import createAction from 'utils/actions/createAction';

// TODO [API] add payload after API is ready
export const addToCart = createAction(
  'CartContainer/ADD_TO_CART',
  purchaseObj => purchaseObj,
);

export const removeFromCart = createAction(
  'CartContainer/REMOVE_FROM_CART',
  purchaseId => purchaseId,
);

export const setOrderAmount = createAction(
  'CartContainer/SET_ORDER_AMOUNT',
  orderAmount => orderAmount,
);
