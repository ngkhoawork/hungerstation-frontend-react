/*
 *
 * HomePageContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { SELECT_SEARCH_TYPE } from './constants';

export const initialState = fromJS({
  selectedSearchType: 'delivery',
});

function homePageContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SEARCH_TYPE:
      return onSelectSearchType(state, action);
    default:
      return state;
  }
}

const onSelectSearchType = (state, action) => {
  const { selectedType } = action;
  return state.merge({
    selectedSearchType: selectedType,
  });
};

export default homePageContainerReducer;
