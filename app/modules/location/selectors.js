import { createSelector } from 'reselect';
import { List } from 'immutable';
import { initialState } from './reducer';

/**
 * Direct selector to the searchBarContainer state domain
 */

export const selectLocationDomain = state =>
  state.get('location', initialState);

export const selectCities = createSelector(
  selectLocationDomain,
  searchBarState => searchBarState.get('cities'),
);
export const selectDistricts = createSelector(
  selectLocationDomain,
  searchBarState => searchBarState.get('districts'),
);

export const selectCity = createSelector(selectLocationDomain, searchBarState =>
  searchBarState.get('selectedCity'),
);

export const selectDistrict = createSelector(
  selectLocationDomain,
  searchBarState => searchBarState.get('selectedDistrict'),
);

export const selectDistrictId = createSelector(
  selectLocationDomain,
  locationState => {
    const district = locationState.get('selectedDistrict');
    return district && district.get('id');
  },
);

export const selectedDistricts = createSelector(
  selectLocationDomain,
  selectCity,
  (searchBarState, city) => {
    if (city) {
      return searchBarState.getIn(['districts', city.get('id')], List());
    }
    return List();
  },
);

export const selectCoords = createSelector(
  selectLocationDomain,
  locationState => {
    const { lat, lng } = locationState.get('coords').toJS();
    return { latitude: lat, longitude: lng };
  },
);

export const selectIsSettlementLoaded = createSelector(
  selectLocationDomain,
  searchBarState => searchBarState.get('isSettlementLoaded'),
);
