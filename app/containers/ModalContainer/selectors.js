import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectModalContainerDomain = state =>
  state.get('modalContainer', initialState);

export const makeSelectIsOpen = () =>
  createSelector(selectModalContainerDomain, modalState =>
    modalState.get('isOpen'),
  );

export { selectModalContainerDomain };
