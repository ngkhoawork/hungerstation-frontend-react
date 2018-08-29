/*
 *
 * HomePageContainer actions
 *
 */

import { SELECT_SEARCH_TYPE } from './constants';

export const selectSearchTypeAction = selectedType => ({
  type: SELECT_SEARCH_TYPE,
  selectedType,
});
