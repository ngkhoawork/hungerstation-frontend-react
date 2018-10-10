import { fromJS } from 'immutable';
import { searchRestaurantAction } from './actions';
export const initialState = fromJS({
  search: '',
});

function restaurantListSearchInputReducer(state = initialState, action) {
  switch (action.type) {
    case searchRestaurantAction.type:
      return state.set('search', action.payload);
    default:
      return state;
  }
}

export default restaurantListSearchInputReducer;
