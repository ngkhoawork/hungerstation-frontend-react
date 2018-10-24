import { fromJS, List } from 'immutable';
import {
  updateRestaurantsListing,
  updateVisibleRestaurantsAction,
  fetchDeliveryFiltersSuccessAction,
  toggleFilterAction,
  searchRestaurantAction,
  resetChosenFiltersAction,
  saveFiltersStageAction,
  discartFiltersToSavedStageAction,
  changeOrderFilterAction,
  resetCusinesAction,
} from './actions';
import { MIN_ORDER_RANGE, TIME_ESTIMATION_RANGE } from './constants';

const INITIAL_CHOSEN_FILTERS_STATE = {
  kitchens: {},
  delivery_option: 'all',
  min_order: MIN_ORDER_RANGE.max,
  delivery_time: TIME_ESTIMATION_RANGE.min,
};

export const initialState = fromJS({
  restaurants: [],
  visibleRestaurantsIds: [],
  filters: {
    kitchens: [],
    delivery_options: [],
  },
  chosenFilters: INITIAL_CHOSEN_FILTERS_STATE,
  filtersStage: {},
  search: '',
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case updateRestaurantsListing.type:
      return state.set('restaurants', List(action.payload.restaurants));

    case updateVisibleRestaurantsAction.type:
      return state.set('visibleRestaurantsIds', action.payload);

    case fetchDeliveryFiltersSuccessAction.type: {
      const { kitchens, delivery_providers } = action.payload;
      return state.updateIn(['filters'], map =>
        map
          .set('kitchens', kitchens)
          .set('delivery_options', delivery_providers),
      );
    }

    case changeOrderFilterAction.type: {
      const { filterKey, value } = action.payload;
      return state.updateIn(['chosenFilters'], map =>
        map.updateIn([filterKey], () => value),
      );
    }

    case toggleFilterAction.type: {
      const { filterKey, value } = action.payload;
      return state.updateIn(['chosenFilters'], map =>
        map.updateIn(
          [filterKey],
          filterKey === 'delivery_option'
            ? () => value
            : map =>
                map.has(value) ? map.delete(value) : map.set(value, value), //eslint-disable-line
        ),
      );
    }

    case resetCusinesAction.type:
      return state.updateIn(['chosenFilters'], map =>
        map.updateIn(['kitchens'], map => map.clear()),
      );

    case resetChosenFiltersAction.type:
      return state.update('chosenFilters', () =>
        fromJS(INITIAL_CHOSEN_FILTERS_STATE),
      );

    case saveFiltersStageAction.type:
      return state.update('filtersStage', () => state.get('chosenFilters'));

    case discartFiltersToSavedStageAction.type:
      return state.update('chosenFilters', () => state.get('filtersStage'));

    case searchRestaurantAction.type:
      return state.set('search', action.payload);

    default:
      return state;
  }
}

export default reducer;
