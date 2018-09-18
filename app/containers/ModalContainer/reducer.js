/*
 *
 * ModalContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { SHOW_MODAL, HIDE_MODAL } from './constants';

export const initialState = fromJS({
  isOpen: false,
});

const modalContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return onShowModal(state);
    case HIDE_MODAL:
      return onHideModal(state);
    default:
      return state;
  }
};

const onShowModal = state =>
  state.merge({
    isOpen: true,
  });

const onHideModal = state =>
  state.merge({
    isOpen: false,
  });

export default modalContainerReducer;
