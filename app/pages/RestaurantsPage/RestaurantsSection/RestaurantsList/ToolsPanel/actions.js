// import { DEFAULT_ACTION } from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };

import createAction from 'utils/actions/createAction';

export const searchRestaurantAction = createAction(
  'RestaurantListToolsPanel/SEARCH_RESTAURANT',
  string => string,
);
