import offersListContainerReducer, { initialState } from '../reducer';

describe('offersListContainerReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });
  it('returns the initial state', () => {
    const expectedResult = state;
    expect(offersListContainerReducer(undefined, {})).toEqual(expectedResult);
  });
});
