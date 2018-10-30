import createAction from 'utils/actions/createAction';

export const addToCart = createAction(
  'CartContainer/ADD_TO_CART',
  purchaseObj => purchaseObj,
);

export const removeFromCart = createAction(
  'CartContainer/REMOVE_FROM_CART',
  purchaseId => purchaseId,
);
