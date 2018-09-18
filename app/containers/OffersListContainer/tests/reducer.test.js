import { fromJS } from 'immutable';
import offersListContainerReducer from '../reducer';

describe('offersListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(offersListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
