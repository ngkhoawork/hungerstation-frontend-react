import { fromJS } from 'immutable';
import {
  fetchRestaurantRequest,
  fetchRestaurantSuccess,
  fetchRestaurantError,
} from './actions';

export const initialState = fromJS({
  restaurant: {},
});

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case fetchRestaurantRequest.type:
      return state.set('isLoading', true);

    case fetchRestaurantSuccess.type: {
      return state
        .set('isLoading', false)
        .set('restaurant', payload.restaurant);
    }

    case fetchRestaurantError.type:
      return state.set('isLoading', false);

    default:
      return state;
  }
}

export default reducer;
