/*
 *
 * ModalContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { SHOW_MODAL, HIDE_MODAL } from './constants';

export const initialState = fromJS({
  isOpen: false,
  view: null,
});

const modalContainerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return state.merge({ isOpen: true, view: payload.view });
    case HIDE_MODAL:
      return state.merge(initialState);
    default:
      return state;
  }
};

export default modalContainerReducer;
