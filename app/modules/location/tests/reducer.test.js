import locationReducer, { initialState } from '../reducer';

describe('locationReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });
  it('returns the initial state', () => {
    const expectedResult = state;
    expect(locationReducer(undefined, {})).toEqual(expectedResult);
  });
});
