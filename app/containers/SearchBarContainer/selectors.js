import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchBarContainer state domain
 */

const selectSearchBarContainerDomain = state =>
  state.get('searchBarContainer', initialState);

export const makeSelectCities = createSelector(
  selectSearchBarContainerDomain,
  searchBarState => searchBarState.get('cities'),
);

export const makeSelectDistricts = createSelector(
  selectSearchBarContainerDomain,
  searchBarState => searchBarState.get('districts'),
);

export const makeSelectIsSettlementLoaded = createSelector(
  selectSearchBarContainerDomain,
  searchBarState => searchBarState.get('isSettlementLoaded'),
);

export const makeSelectDistrict = createSelector(
  selectSearchBarContainerDomain,
  searchBarState => searchBarState.get('selectedDistrict'),
);

export const makeSelectCity = createSelector(
  selectSearchBarContainerDomain,
  searchBarState => searchBarState.get('selectedCity'),
);

export { selectSearchBarContainerDomain };
