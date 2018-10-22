import { fromJS } from 'immutable';
import { addToCart, removeFromCart, setOrderAmount } from './actions';

export const initialState = fromJS({
  purchases: {
    1: { id: '1', title: 'Triple Whooper', price: 250, description: 'No mayo' },
    2: { id: '2', title: 'Big Filler', price: 170 },
  },
  quantities: { 1: 2, 2: 1 },
  orderAmount: 420,
});

function cartContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case addToCart.type: {
      const quantity = state.getIn(['quantities', payload.id]);

      return state
        .updateIn(['purchases'], map => map.set(payload.id, payload))
        .updateIn(['quantities'], map => map.set(payload.id, quantity + 1));
    }

    case removeFromCart.type:
      return state
        .updateIn(['purchases'], map => map.delete(payload))
        .updateIn(['quantities'], map => map.delete(payload));

    case setOrderAmount.type:
      return state.setIn(['orderAmount'], payload);

    default:
      return state;
  }
}

export default cartContainerReducer;
