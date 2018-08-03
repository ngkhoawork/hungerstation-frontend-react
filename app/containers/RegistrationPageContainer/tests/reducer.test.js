import { fromJS } from 'immutable';
import registrationPageContainerReducer from '../reducer';

describe('registrationPageContainerReducer', () => {
  it('returns the initial state', () => {
    expect(registrationPageContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
