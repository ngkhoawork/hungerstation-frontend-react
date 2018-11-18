import createAction from 'utils/actions/createAction';

// RESTAURANTS LIST
export const fetchRestaurantsRequest = createAction(
  'restaurants/FETCH_RESTAURANTS_REQUEST',
);

export const fetchRestaurantsAction = createAction(
  'restaurants/FETCH_RESTAURANTS',
  payload => payload,
);

export const updateRestaurantsListing = createAction(
  'restaurants/UPDATE_RESTAURANTS_LISTING',
  restaurants => ({ restaurants }),
);

export const fetchRestaurantsError = createAction(
  'restaurants/FETCH_RESTAURANTS_ERROR',
);

// SEARCH
export const updateVisibleRestaurantsAction = createAction(
  'restaurants/UPDATE_VISIBLE_RESTAURANTS',
  retaurantsIdsArray => retaurantsIdsArray,
);

export const searchRestaurantAction = createAction(
  'restaurants/SEARCH_RESTAURANT',
  string => string,
);

// FILTERS
export const fetchDeliveryFiltersAction = createAction(
  'restaurant/FETCH_DELIVERY_FILTERS',
);

export const fetchDeliveryFiltersSuccessAction = createAction(
  'restaurant/FETCH_DELIVERY_FILTERS_SUCCESS',
  ({ kitchens, delivery_providers }) => ({ kitchens, delivery_providers }),
);

export const toggleFilterAction = createAction(
  'restaurants/TOGGLE_FILTER',
  ({ filterKey, value }) => ({ filterKey, value }),
);

export const changeOrderFilterAction = createAction(
  'restaurants/CHANGE_ORDER_FILTER',
  ({ filterKey, value }) => ({ filterKey, value }),
);

export const saveFiltersStageAction = createAction(
  'restaurants/SAVE_FILTERS_STAGE',
);

export const discardFiltersToSavedStageAction = createAction(
  'restaurants/DISCARD_FILTERS_TO_SAVED_STAGE',
);

export const resetChosenFiltersAction = createAction(
  'restaurants/RESET_CHOSEN_FILTERS',
);

export const resetCuisinesAction = createAction('restaurants/RESET_CUISINES');
