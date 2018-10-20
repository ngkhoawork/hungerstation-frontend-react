import { createSelector } from 'reselect';
import { List } from 'immutable';
import { sample } from 'utils/helpers';
import { initialState } from './reducer';

/**
 * Direct selector to the searchBarContainer state domain
 */

const selectLocationDomain = state => state.get('location', initialState);

export const selectCities = createSelector(
  selectLocationDomain,
  searchBarState => searchBarState.get('cities'),
);

export const selectCity = createSelector(selectLocationDomain, searchBarState =>
  searchBarState.get('selectedCity'),
);

export const selectDistricts = createSelector(
  selectLocationDomain,
  selectCity,
  (searchBarState, city) => {
    if (city) {
      return searchBarState.getIn(['districts', city.get('id')], List());
    }
    return List();
  },
);

export const selectIsSettlementLoaded = createSelector(
  selectLocationDomain,
  searchBarState => searchBarState.get('isSettlementLoaded'),
);

export const selectDistrict = createSelector(
  selectLocationDomain,
  searchBarState => searchBarState.get('selectedDistrict'),
);

export const makeSelectLastCoords = () =>
  createSelector(selectLocationDomain, locationState =>
    locationState.get('coords').toJS(),
  );

export const makeSampleCities = () =>
  createSelector(selectLocationDomain, locationState => {
    const cities = locationState.get('cities').toJS();
    return sample(cities, 9);
  });

export const makeSelectDistricts = () =>
  createSelector(selectLocationDomain, locationState =>
    locationState.get('districts').toJS(),
  );

export { selectLocationDomain };
