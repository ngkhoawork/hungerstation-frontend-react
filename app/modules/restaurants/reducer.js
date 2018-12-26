import { fromJS, List } from 'immutable';
import { maxBy } from 'lodash';
import { logout } from 'modules/auth/actions';
import intl from 'utils/intlService';
import messages from 'pages/RestaurantsPage/RestaurantsSection/RestaurantsList/ToolsPanel/messages';
import {
  fetchRestaurantsRequest,
  fetchRestaurantsError,
  updateRestaurantsListing,
  updateVisibleRestaurantsAction,
  fetchDeliveryFiltersSuccessAction,
  toggleFilterAction,
  searchRestaurantAction,
  resetChosenFiltersAction,
  saveFiltersStageAction,
  discardFiltersToSavedStageAction,
  changeOrderFilterAction,
  resetCuisinesAction,
  resetState,
} from './actions';
import { MIN_ORDER_RANGE, TIME_ESTIMATION_RANGE } from './constants';

// TODO [API] delete this when API will be ready
const TAGS_MOCK = [
  {
    id: '11111',
    name: intl.formatMessage(messages.onlinePayment),
    type: 'accept_credit_card',
  },
  {
    id: '22222',
    name: intl.formatMessage(messages.voucher),
    type: 'accept_voucher',
  },
  {
    id: '33333',
    name: intl.formatMessage(messages.cashOnDelivery),
    type: 'accept_cash_on_delivery',
  },
  {
    id: '44444',
    name: intl.formatMessage(messages.fastDelivery),
    type: 'hungerstation_delivery',
  },
];

const INITIAL_CHOSEN_FILTERS_STATE = {
  kitchens: {},
  tags: {},
  delivery_option: 'all',
  min_order: MIN_ORDER_RANGE.max,
  delivery_time: TIME_ESTIMATION_RANGE.min,
};

export const initialState = fromJS({
  restaurants: [],
  visibleRestaurantsIds: [],
  minOrderRange: {
    min: 0,
    max: 500,
  },
  filters: {
    kitchens: [],
    delivery_options: [],
    tags: TAGS_MOCK,
  },
  chosenFilters: INITIAL_CHOSEN_FILTERS_STATE,
  filtersStage: {},
  search: '',
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case fetchRestaurantsRequest.type:
      return state.set('isLoading', true);

    case fetchRestaurantsError.type:
      return state.set('isLoading', false);

    case updateRestaurantsListing.type: {
      const max = maxBy(action.payload.restaurants, 'minOrder');
      return state
        .set('isLoading', false)
        .set('restaurants', List(action.payload.restaurants))
        .updateIn(['minOrderRange', 'max'], () => (max ? max.minOrder : 0))
        .updateIn(
          ['chosenFilters', 'min_order'],
          () => (max ? max.minOrder : 0),
        );
    }

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

    case resetCuisinesAction.type:
      return state.updateIn(['chosenFilters'], map =>
        map.updateIn(['kitchens'], map => map.clear()),
      );

    case resetChosenFiltersAction.type: {
      const minOrder = state.getIn(['minOrderRange', 'max']);

      return state
        .update('chosenFilters', () => fromJS(INITIAL_CHOSEN_FILTERS_STATE))
        .updateIn(['chosenFilters', 'min_order'], () => minOrder);
    }

    case saveFiltersStageAction.type:
      return state.update('filtersStage', () => state.get('chosenFilters'));

    case discardFiltersToSavedStageAction.type:
      return state.update('chosenFilters', () => state.get('filtersStage'));

    case searchRestaurantAction.type:
      return state.set('search', action.payload);

    case resetState.type:
    case logout.type:
      return initialState;

    default:
      return state;
  }
}

export default reducer;
