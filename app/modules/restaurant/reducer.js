import { fromJS } from 'immutable';
import { logout } from 'modules/auth/actions';
import {
  setBranchId,
  fetchRestaurantRequest,
  fetchRestaurantSuccess,
  fetchRestaurantError,
} from './actions';

export const initialState = fromJS({
  restaurant: {},
});

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    // if restaurant is known use restaurant.id over branchId.
    // branchId is just for cases where resturant is not loaded.
    case setBranchId.type:
      return state.set('branchId', payload);

    case fetchRestaurantRequest.type:
      return state.set('isLoading', true);

    case fetchRestaurantSuccess.type:
      return state
        .set('isLoading', false)
        .set('restaurant', payload.restaurant);

    case fetchRestaurantError.type:
    case logout.type:
      return initialState;

    default:
      return state;
  }
}

export default reducer;
