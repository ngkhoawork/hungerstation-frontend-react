import createAction from 'utils/actions/createAction';

export const fetchRestaurant = createAction(
  'restaurant/FETCH_RESTAURANT',
  payload => payload,
);

export const fetchRestaurantRequest = createAction(
  'restaurant/FETCH_RESTAURANT_REQUEST',
);

export const fetchRestaurantSuccess = createAction(
  'restaurant/FETCH_RESTAURANT_SUCCESS',
  payload => payload,
);

export const fetchRestaurantError = createAction(
  'restaurant/FETCH_RESTAURANT_ERROR',
);
