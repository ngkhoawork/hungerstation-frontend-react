import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the filtersContainer state domain
 */

const selectFiltersContainerDomain = state =>
  state.get('filtersContainer', initialState);

export const makeSelectTags = () =>
  createSelector(selectFiltersContainerDomain, filtersState => {
    const output = filtersState && filtersState.get('tags');

    if (output) {
      return output;
    }
    return null;
  });

export const makeSelectCuisines = () =>
  createSelector(selectFiltersContainerDomain, filtersState => {
    const output = filtersState && filtersState.get('cuisines');

    if (output) {
      return output;
    }
    return null;
  });

export const makeSelectDeliveryTypes = () =>
  createSelector(selectFiltersContainerDomain, filtersState => {
    const output = filtersState && filtersState.get('deliveryTypes');

    if (output) {
      return output;
    }
    return null;
  });

export { selectFiltersContainerDomain };
