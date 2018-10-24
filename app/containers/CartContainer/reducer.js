import { fromJS } from 'immutable';
import { addToCart, removeFromCart } from './actions';

export const initialState = fromJS({
  purchases: {},
});

function cartContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case addToCart.type:
      return state.updateIn(['purchases'], map =>
        map.set(payload.product.id, payload),
      );

    case removeFromCart.type:
      return state.updateIn(['purchases'], map => map.delete(payload));

    default:
      return state;
  }
}

export default cartContainerReducer;
