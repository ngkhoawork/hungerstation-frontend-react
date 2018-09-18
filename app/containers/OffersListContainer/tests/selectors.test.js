import { fromJS } from 'immutable';
import {
  selectOffersListContainerDomain,
  makeSelectOffers,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectOffersListContainerDomain', () => {
  const state = fromJS({
    filtersContainer: initialState,
  });

  it('Expect to have tags', () => {
    expect(selectOffersListContainerDomain(state).toJS()).toHaveProperty(
      'offers',
    );
  });

  it('Expect to have correct values in tags object', () => {
    expect(makeSelectOffers(state)).toMatchObject(
      state
        .get('filtersContainer')
        .get('offers')
        .toJS(),
    );
  });
});
