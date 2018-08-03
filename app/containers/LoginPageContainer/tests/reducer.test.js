import { fromJS } from 'immutable';
import loginPageContainerReducer from '../reducer';

describe('loginPageContainerReducer', () => {
  it('returns the initial state', () => {
    expect(loginPageContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
