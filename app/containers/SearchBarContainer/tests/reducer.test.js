import searchBarContainerReducer, { initialState } from '../reducer';

describe('searchBarContainerReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });
  it('returns the initial state', () => {
    const expectedResult = state;
    expect(searchBarContainerReducer(undefined, {})).toEqual(expectedResult);
  });
});
