import { fromJS } from 'immutable';
import { logout } from 'modules/auth/actions';
import {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersError,
} from './actions';

export const initialState = fromJS({
  isLoading: false,
  orders: [],
  selectedOrder: null,
});

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    // if restaurant is known use restaurant.id over branchId.
    // branchId is just for cases where resturant is not loaded.
    case fetchOrdersRequest.type:
      return state.set('isLoading', true);

    case fetchOrdersSuccess.type: {
      return state.set('isLoading', false).set('orders', payload.orders);
    }

    case fetchOrdersError.type:
      return state.set('isLoading', false);

    case logout.type:
      return initialState;

    default:
      return state;
  }
}

export default reducer;
