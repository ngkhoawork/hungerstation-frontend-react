/*
 *
 * LoginPageContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { LOG_USER_IN_SUCCESS } from './constants';

export const initialState = fromJS({});

function loginPageContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_USER_IN_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default loginPageContainerReducer;
