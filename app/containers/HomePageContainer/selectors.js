import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePageContainer state domain
 */

const selectHomePageContainerDomain = state =>
  state.get('homePageContainer', initialState);

export const makeSelectSearchType = createSelector(
  selectHomePageContainerDomain,
  homePageState => homePageState.get('selectedSearchType'),
);

export { selectHomePageContainerDomain };
