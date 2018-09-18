import { fromJS } from 'immutable';
import modalContainerReducer from '../reducer';

describe('modalContainerReducer', () => {
  it('returns the initial state', () => {
    expect(modalContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
