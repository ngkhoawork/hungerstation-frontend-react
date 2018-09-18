import restaurantsListContainerReducer, { initialState } from '../reducer';

describe('restaurantsListContainerReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });
  it('returns the initial state', () => {
    const expectedResult = state;
    expect(restaurantsListContainerReducer(undefined, {})).toEqual(
      expectedResult,
    );
  });
});
