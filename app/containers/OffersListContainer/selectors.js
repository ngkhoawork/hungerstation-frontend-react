import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the offersListContainer state domain
 */

const selectOffersListContainerDomain = state =>
  state.get('offersListContainer', initialState);

export const makeSelectOffers = createSelector(
  selectOffersListContainerDomain,
  offersState => {
    const output = offersState && offersState.get('offers');

    if (output) {
      return output.toJS();
    }
    return null;
  },
);

export { selectOffersListContainerDomain };
