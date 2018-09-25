import { fromJS } from 'immutable';
import {
  selectLocationDomain,
  selectCities,
  selectDistricts,
  selectIsSettlementLoaded,
  selectDistrict,
  selectCity,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectLocationDomain', () => {
  const state = fromJS({
    searchBarContainer: initialState,
  });

  it('Expect to have cities', () => {
    expect(selectLocationDomain(state).toJS()).toHaveProperty('cities');
  });

  it('Expect to have correct values in cities object', () => {
    expect(selectCities(state)).toEqual(
      state.get('searchBarContainer').get('cities'),
    );
  });

  it('Expect to have districts', () => {
    expect(selectLocationDomain(state).toJS()).toHaveProperty('districts');
  });

  it('Expect to have correct values in districts object', () => {
    expect(selectDistricts(state)).toEqual(
      state.get('searchBarContainer').get('districts'),
    );
  });

  it('Expect to have isSettlementLoaded', () => {
    expect(selectLocationDomain(state).toJS()).toHaveProperty(
      'isSettlementLoaded',
    );
  });

  it('Expect to have correct values in isSettlementLoaded object', () => {
    expect(selectIsSettlementLoaded(state)).toEqual(
      state.get('searchBarContainer').get('isSettlementLoaded'),
    );
  });

  it('Expect to have selectedDistrict', () => {
    expect(selectLocationDomain(state).toJS()).toHaveProperty(
      'selectedDistrict',
    );
  });

  it('Expect to have correct values in selectedDistrict object', () => {
    expect(selectDistrict(state)).toEqual(
      state.get('searchBarContainer').get('selectedDistrict'),
    );
  });

  it('Expect to have selectedCity', () => {
    expect(selectLocationDomain(state).toJS()).toHaveProperty('selectedCity');
  });

  it('Expect to have correct values in selectedCity object', () => {
    expect(selectCity(state)).toEqual(
      state.get('searchBarContainer').get('selectedCity'),
    );
  });
});
