import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectModalContainerDomain = state =>
  state.get('withModal', initialState);

export const makeSelectIsOpen = () =>
  createSelector(selectModalContainerDomain, modalState => modalState.isOpen);

export { selectModalContainerDomain };
