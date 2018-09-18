import { fromJS } from 'immutable';
import {
  selectFiltersContainerDomain,
  makeSelectTags,
  makeSelectCuisines,
  makeSelectDeliveryTypes,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectFiltersContainerDomain', () => {
  const state = fromJS({
    filtersContainer: initialState,
  });
  it('Expect to have tags', () => {
    expect(selectFiltersContainerDomain(state).toJS()).toHaveProperty('tags');
  });
  it('Expect to have correct values in tags object', () => {
    expect(makeSelectTags(state)).toMatchObject(
      state
        .get('filtersContainer')
        .get('tags')
        .toJS(),
    );
  });
  it('Expect to have cuisines', () => {
    expect(selectFiltersContainerDomain(state).toJS()).toHaveProperty(
      'cuisines',
    );
  });
  it('Expect to have correct values in cuisines object', () => {
    expect(makeSelectCuisines(state)).toMatchObject(
      state
        .get('filtersContainer')
        .get('cuisines')
        .toJS(),
    );
  });
  it('Expect to have deliveryTypes', () => {
    expect(selectFiltersContainerDomain(state).toJS()).toHaveProperty(
      'deliveryTypes',
    );
  });
  it('Expect to have correct values in deliveryTypes object', () => {
    expect(makeSelectDeliveryTypes(state)).toMatchObject(
      state
        .get('filtersContainer')
        .get('deliveryTypes')
        .toJS(),
    );
  });
});
