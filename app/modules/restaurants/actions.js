import createAction from 'utils/actions/createAction';

export const updateRestaurantsListing = createAction(
  'restaurants/UPDATE_RESTAURANTS_LISTING',
  restaurants => ({ restaurants }),
);

export const updateVisibleRestaurantsAction = createAction(
  'restaurants/UPDATE_VISIBLE_RESTAURANTS',
  retaurantsIdsArray => retaurantsIdsArray,
);

export const fecthRestaurantsAction = createAction(
  'restaurants/FETCH_RSTAURANTS',
);
