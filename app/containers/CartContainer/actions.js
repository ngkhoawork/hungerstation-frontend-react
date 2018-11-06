import createAction from 'utils/actions/createAction';

export const initCart = createAction('CartContainer/INIT_CART');

export const addToCart = createAction(
  'CartContainer/ADD_TO_CART',
  purchaseObj => purchaseObj,
);

export const editCartItem = createAction(
  'CartContainer/EDIT_CART_ITEM',
  purchaseObj => purchaseObj,
);

export const removeFromCart = createAction(
  'CartContainer/REMOVE_FROM_CART',
  purchaseId => purchaseId,
);

export const emptyCart = createAction('CartContainer/EMPTY_CART');
