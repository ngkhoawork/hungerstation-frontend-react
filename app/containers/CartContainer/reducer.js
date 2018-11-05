import {
  clearStorageItem,
  getStorageItem,
  setStorageItem,
} from 'utils/localStorage';
import { initCart, addToCart, removeFromCart, emptyCart } from './actions';

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

    case removeFromCart.type: {
      const purchases = state.purchases.filter(({ id }) => id !== payload);
      saveCartItems(purchases);

      return Object.assign({}, state, { purchases });
    }

    case emptyCart.type: {
      clearStorageItem('cartItems');
      return Object.assign({}, state, { purchases: [] });
    }

    default:
      return state;
  }
}

export default cartContainerReducer;
