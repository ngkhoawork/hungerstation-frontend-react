import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchBarContainer state domain
 */

const selectSearchBarContainerDomain = state =>
  state.get('searchBarContainer', initialState);

export const makeSelectCities = createSelector(
  selectSearchBarContainerDomain,
  homePageState => {
    const output = homePageState && homePageState.get('cities');

    if (output) {
      return output.JS();
    }
    return null;
  },
);

export const makeSelectDistricts = createSelector(
  selectSearchBarContainerDomain,
  homePageState => {
    const output = homePageState && homePageState.get('districts');

    if (output) {
      return output.JS();
    }
    return null;
  },
);

export const makeSelectIsSettlementLoaded = createSelector(
  selectSearchBarContainerDomain,
  homePageState => {
    const output = homePageState && homePageState.get('isSettlementLoaded');
    return output;
  },
);

export { selectSearchBarContainerDomain };
