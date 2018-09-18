import { fromJS } from 'immutable';
import {
  selectSearchBarContainerDomain,
  makeSelectCities,
  makeSelectDistricts,
  makeSelectIsSettlementLoaded,
  makeSelectDistrict,
  makeSelectCity,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectSearchBarContainerDomain', () => {
  const state = fromJS({
    searchBarContainer: initialState,
  });

  it('Expect to have cities', () => {
    expect(selectSearchBarContainerDomain(state).toJS()).toHaveProperty(
      'cities',
    );
  });

  it('Expect to have correct values in cities object', () => {
    expect(makeSelectCities(state)).toEqual(
      state.get('searchBarContainer').get('cities'),
    );
  });

  it('Expect to have districts', () => {
    expect(selectSearchBarContainerDomain(state).toJS()).toHaveProperty(
      'districts',
    );
  });

  it('Expect to have correct values in districts object', () => {
    expect(makeSelectDistricts(state)).toEqual(
      state.get('searchBarContainer').get('districts'),
    );
  });

  it('Expect to have isSettlementLoaded', () => {
    expect(selectSearchBarContainerDomain(state).toJS()).toHaveProperty(
      'isSettlementLoaded',
    );
  });

  it('Expect to have correct values in isSettlementLoaded object', () => {
    expect(makeSelectIsSettlementLoaded(state)).toEqual(
      state.get('searchBarContainer').get('isSettlementLoaded'),
    );
  });

  it('Expect to have selectedDistrict', () => {
    expect(selectSearchBarContainerDomain(state).toJS()).toHaveProperty(
      'selectedDistrict',
    );
  });

  it('Expect to have correct values in selectedDistrict object', () => {
    expect(makeSelectDistrict(state)).toEqual(
      state.get('searchBarContainer').get('selectedDistrict'),
    );
  });

  it('Expect to have selectedCity', () => {
    expect(selectSearchBarContainerDomain(state).toJS()).toHaveProperty(
      'selectedCity',
    );
  });

  it('Expect to have correct values in selectedCity object', () => {
    expect(makeSelectCity(state)).toEqual(
      state.get('searchBarContainer').get('selectedCity'),
    );
  });
});
