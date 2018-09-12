import { toggleSection } from '../actions';
import { TOGGLE_SECTION } from '../constants';

describe('FiltersContainer actions', () => {
  describe('Toggle Section Action', () => {
    it('has a type of TOGGLE_SECTION', () => {
      const sectionName = 'tags';
      const expected = {
        type: TOGGLE_SECTION,
        sectionName,
      };
      expect(toggleSection(sectionName)).toEqual(expected);
    });
  });
});
