import { fromJS } from 'immutable';

import { initialState } from '../reducer';
import { makeSelectIsOpen } from '../selectors';

describe('selectModalContainerDomain', () => {
  const state = fromJS({
    modalContainer: initialState,
  });
  it('Expect to have correct values in object', () => {
    expect(makeSelectIsOpen(state)).toBe(
      state.get('modalContainer').get('isOpen'),
    );
  });
});
