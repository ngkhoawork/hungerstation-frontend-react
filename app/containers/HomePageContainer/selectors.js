import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePageContainer state domain
 */

const selectHomePageContainerDomain = state =>
  state.get('homePageContainer', initialState);

const makeSelectHomePageContainer = () =>
  createSelector(selectHomePageContainerDomain, substate => substate.toJS());

export const makeSelectCities = createSelector(
  selectHomePageContainerDomain,
  homePageState => {
    const output = homePageState && homePageState.get('cities');

    if (output) {
      return output.JS();
    }
    return null;
  },
);

export const makeSelectDistricts = createSelector(
  selectHomePageContainerDomain,
  homePageState => {
    const output = homePageState && homePageState.get('districts');

    if (output) {
      return output.JS();
    }
    return null;
  },
);

export const makeSelectSearchType = createSelector(
  selectHomePageContainerDomain,
  homePageState => {
    const output = homePageState && homePageState.get('selectedSearchType');

    if (output) {
      return output;
    }
    return null;
  },
);

export default makeSelectHomePageContainer;
export { selectHomePageContainerDomain };
