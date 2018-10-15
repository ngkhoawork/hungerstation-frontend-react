import { fromJS, List } from 'immutable';
import {
  updateRestaurantsListing,
  updateVisibleRestaurantsAction,
  fetchDeliveryFiltersSuccessAction,
  toggleFilterAction,
  searchRestaurantAction,
} from './actions';
import { MIN_ORDER_RANGE, TIME_ESTIMATION_RANGE } from './constants';

export const initialState = fromJS({
  restaurants: [],
  visibleRestaurantsIds: [],
  filters: {
    kitchens: [],
    delivery_options: [],
  },
  chosenFilters: {
    kitchens: {},
    delivery_options: {},
    min_order: MIN_ORDER_RANGE.min,
    delivery_time: TIME_ESTIMATION_RANGE.min,
  },
  search: '',
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case updateRestaurantsListing.type:
      return state.set('restaurants', List(action.payload.restaurants)).set(
        'visibleRestaurantsIds',

        action.payload.restaurants.reduce((acc, curr) => [...acc, curr.id], []),
      );
    case updateVisibleRestaurantsAction.type:
      return state.set('visibleRestaurantsIds', action.payload);
    case fetchDeliveryFiltersSuccessAction.type: {
      const { kitchens, delivery_options } = action.payload;
      return state.updateIn(['filters'], map =>
        map.set('kitchens', kitchens).set('delivery_options', delivery_options),
      );
    }
    case toggleFilterAction.type: {
      const { filterKey, value } = action.payload;
      return state.updateIn(['chosenFilters'], map =>
        map.updateIn(
          [filterKey],
          filterKey === 'min_order' || filterKey === 'delivery_time'
            ? () => value
            : map =>
                map.has(value) ? map.delete(value) : map.set(value, value), //eslint-disable-line
        ),
      );
    }
    case searchRestaurantAction.type:
      return state.set('search', action.payload);
    default:
      return state;
  }
}

export default reducer;
