/*
 *
 * ModalContainer actions
 *
 */

import { SHOW_MODAL, HIDE_MODAL } from './constants';

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
