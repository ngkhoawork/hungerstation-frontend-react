import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registrationPageContainer state domain
 */

const selectRegistrationPageContainerDomain = state =>
  state.get('registrationPageContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegistrationPageContainer
 */

const makeSelectRegistrationPageContainer = () =>
  createSelector(selectRegistrationPageContainerDomain, substate =>
    substate.toJS(),
  );

export default makeSelectRegistrationPageContainer;
export { selectRegistrationPageContainerDomain };
