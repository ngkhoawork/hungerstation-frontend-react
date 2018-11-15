import {
  clearStorageItem,
  getStorageItem,
  setStorageItem,
} from 'utils/localStorage';
import { createOrderSuccess } from 'modules/checkout/actions';
import {
  initCart,
  addToCart,
  editCartItem,
  removeFromCart,
  emptyCart,
} from './actions';

let isInitialized = false;

export const initialState = {
  purchases: [],
};

const saveCartItems = purchases =>
  setStorageItem('cartItems', JSON.stringify(purchases));

function cartContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case initCart.type: {
      if (isInitialized) return state;

      isInitialized = true;
      const purchases = JSON.parse(getStorageItem('cartItems') || '[]');

      return Object.assign({}, state, { purchases });
    }

    case addToCart.type: {
      const purchases = state.purchases.concat({
        ...payload,
        id: `${Math.random()}${Date.now()}`,
      });

      saveCartItems(purchases);

      return Object.assign({}, state, { purchases });
    }

    case editCartItem.type: {
      const editedPurchase = state.purchases.find(
        ({ id }) => id === payload.id,
      );
      const editedPurchaseIndex = state.purchases.indexOf(editedPurchase);
      const purchases = state.purchases
        .slice(0, editedPurchaseIndex)
        .concat(payload)
        .concat(state.purchases.slice(editedPurchaseIndex + 1));

      saveCartItems(purchases);

      return Object.assign({}, state, { purchases });
    }

    case removeFromCart.type: {
      const purchases = state.purchases.filter(({ id }) => id !== payload);

      saveCartItems(purchases);

      return Object.assign({}, state, { purchases });
    }

    case emptyCart.type: {
      clearStorageItem('cartItems');

      return Object.assign({}, state, { purchases: [] });
    }

    case createOrderSuccess.type:
      return Object.assign({}, initialState);

    default:
      return state;
  }
}

export default cartContainerReducer;
