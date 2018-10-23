/*
 *
 * ModalContainer actions
 *
 */

import { SHOW_MODAL, HIDE_MODAL } from './constants';

export const showModal = view => {
  window.scrollTo(0, 0);

  return { type: SHOW_MODAL, payload: { view } };
};

export const hideModal = () => ({
  type: HIDE_MODAL,
});
