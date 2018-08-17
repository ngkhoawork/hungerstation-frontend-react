import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePageContainer state domain
 */

const selectHomePageContainerDomain = state =>
  state.get('homePageContainer', initialState);

export const makeSelectSearchType = createSelector(
  selectHomePageContainerDomain,
  homePageState => {
    const output = homePageState && homePageState.get('selectedSearchType');

    if (output) {
      return output;
    }
    return null;
  },
);

export { selectHomePageContainerDomain };
