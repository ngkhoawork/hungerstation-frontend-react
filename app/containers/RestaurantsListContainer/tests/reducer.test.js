import { fromJS } from 'immutable';
import restaurantsListContainerReducer from '../reducer';

describe('restaurantsListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(restaurantsListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
