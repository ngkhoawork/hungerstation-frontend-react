import { fromJS } from 'immutable';
import {
  selectRestaurantsListContainerDomain,
  makeSelectRestaurants,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectRestaurantsListContainerDomain', () => {
  const state = fromJS({
    filtersContainer: initialState,
  });

  it('Expect to have restaurants', () => {
    expect(selectRestaurantsListContainerDomain(state).toJS()).toHaveProperty(
      'restaurants',
    );
  });

  it('Expect to have correct values in restaurants object', () => {
    expect(makeSelectRestaurants(state)).toMatchObject(
      state
        .get('filtersContainer')
        .get('restaurants')
        .toJS(),
    );
  });
});
