import { fromJS, Map } from 'immutable';
import {
  clearStorageItem,
  getStorageItem,
  setStorageItem,
} from 'utils/localStorage';
import { initCart, addToCart, removeFromCart, emptyCart } from './actions';

let isInitialized = false;

export const initialState = fromJS({
  purchases: {},
});

function saveCartItems(state) {
  const cartItems = state.get('purchases').toJS();
  setStorageItem('cartItems', JSON.stringify(cartItems));
}

function cartContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case initCart.type: {
      if (isInitialized) return state;

      isInitialized = true;
      const savedPurchases = JSON.parse(getStorageItem('cartItems') || '{}');

      return state.set('purchases', Map(savedPurchases));
    }

    case addToCart.type: {
      const newState = state.updateIn(['purchases'], map =>
        map.set(payload.product.id, payload),
      );
      saveCartItems(newState);

      return newState;
    }

    case removeFromCart.type: {
      const newState = state.updateIn(['purchases'], map =>
        map.delete(payload),
      );
      saveCartItems(newState);

      return newState;
    }

    case emptyCart.type: {
      clearStorageItem('cartItems');
      return state.set('purchases', Map());
    }

    default:
      return state;
  }
}

export default cartContainerReducer;
