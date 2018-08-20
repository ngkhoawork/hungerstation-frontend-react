import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchTypeContainer state domain
 */

const selectSearchTypeContainerDomain = state =>
  state.get('searchTypeContainer', initialState);

export const makeSelectSearchType = createSelector(
  selectSearchTypeContainerDomain,
  searchTypeState => {
    const output = searchTypeState && searchTypeState.get('selectedSearchType');

    if (output) {
      return output;
    }
    return null;
  },
);

export { selectSearchTypeContainerDomain };
