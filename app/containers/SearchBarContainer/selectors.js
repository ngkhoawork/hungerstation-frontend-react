import { createSelector } from 'reselect';
import { List } from 'immutable';
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

export const makeSelectCity = createSelector(
  selectSearchBarContainerDomain,
  searchBarState => searchBarState.get('selectedCity'),
);

export const makeSelectDistricts = createSelector(
  selectSearchBarContainerDomain,
  makeSelectCity,
  (searchBarState, city) => {
    if (city) {
      return searchBarState.getIn(['districts', city.get('id')], List());
    }
    return List();
  },
);

export const makeSelectIsSettlementLoaded = createSelector(
  selectSearchBarContainerDomain,
  searchBarState => searchBarState.get('isSettlementLoaded'),
);

export const makeSelectDistrict = createSelector(
  selectSearchBarContainerDomain,
  searchBarState => searchBarState.get('selectedDistrict'),
);

export { selectSearchBarContainerDomain };
