import { fromJS } from 'immutable';
import searchBarContainerReducer from '../reducer';

describe('searchBarContainerReducer', () => {
  it('returns the initial state', () => {
    expect(searchBarContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
