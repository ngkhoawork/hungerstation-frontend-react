import modalContainerReducer, { initialState } from '../reducer';

describe('modalContainerReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });
  it('returns the initial state', () => {
    const expectedResult = state;
    expect(modalContainerReducer(undefined, {})).toEqual(expectedResult);
  });
});
