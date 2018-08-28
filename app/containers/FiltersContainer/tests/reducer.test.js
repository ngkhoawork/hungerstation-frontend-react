import { fromJS } from 'immutable';
import filtersContainerReducer from '../reducer';

describe('filtersContainerReducer', () => {
  it('returns the initial state', () => {
    expect(filtersContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
