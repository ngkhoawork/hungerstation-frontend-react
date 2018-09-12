import filtersContainerReducer, { initialState } from '../reducer';

describe('filtersContainerReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });
  it('returns the initial state', () => {
    const expectedResult = state;
    expect(filtersContainerReducer(undefined, {})).toEqual(expectedResult);
  });
});
