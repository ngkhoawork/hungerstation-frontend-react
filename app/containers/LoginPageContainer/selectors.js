import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPageContainer state domain
 */

const selectLoginPageContainerDomain = state =>
  state.get('loginPageContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPageContainer
 */

const makeSelectLoginPageContainer = () =>
  createSelector(selectLoginPageContainerDomain, substate => substate.toJS());

export default makeSelectLoginPageContainer;
export { selectLoginPageContainerDomain };
