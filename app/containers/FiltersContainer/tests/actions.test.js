import { toggleSection } from '../actions';
import { TOGGLE_SECTION } from '../constants';

describe('FiltersContainer actions', () => {
  describe('toggleSection Action', () => {
    it('has a type of TOGGLE_SECTION', () => {
      const expected = {
        type: TOGGLE_SECTION,
      };
      expect(toggleSection()).toEqual(expected);
    });
  });
});
