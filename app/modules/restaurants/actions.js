import createAction from 'utils/actions/createAction';

// RESTAURANTS LIST
export const fetchRestaurantsAction = createAction(
  'restaurants/FETCH_RESTAURANTS',
  payload => payload,
);

export const updateRestaurantsListing = createAction(
  'restaurants/UPDATE_RESTAURANTS_LISTING',
  restaurants => ({ restaurants }),
);

// SEARCH
export const updateVisibleRestaurantsAction = createAction(
  'restaurants/UPDATE_VISIBLE_RESTAURANTS',
  retaurantsIdsArray => retaurantsIdsArray,
);

// FILTERS
export const fetchDeliveryFiltersAction = createAction(
  'restaurant/FETCH_DELIVERY_FILTERS',
);

export const fetchDeliveryFiltersSuccessAction = createAction(
  'restaurant/FETCH_DELIVERY_FILTERS_SUCCESS',
  ({ kitchens, delivery_options }) => ({ kitchens, delivery_options }),
);

export const toggleFilterAction = createAction(
  'restaurants/TOGGLE_FILTER',
  ({ filterKey, value }) => ({ filterKey, value }),
);

export const searchRestaurantAction = createAction(
  'restaurants/SEARCH_RESTAURANT',
  string => string,
);
