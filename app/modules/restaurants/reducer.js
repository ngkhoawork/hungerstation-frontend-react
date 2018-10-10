import { fromJS } from 'immutable';
import {
  updateRestaurantsListing,
  updateVisibleRestaurantsAction,
} from './actions';

export const initialState = fromJS({
  restaurants: [],
  visibleRestaurantsIds: [],
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case updateRestaurantsListing.type:
      return state.set('restaurants', action.payload.restaurants).set(
        'visibleRestaurantsIds',

        action.payload.restaurants.reduce((acc, curr) => [...acc, curr.id], []),
      );
    case updateVisibleRestaurantsAction.type:
      return state.set('visibleRestaurantsIds', action.payload);
    default:
      return state;
  }
}

export default reducer;
