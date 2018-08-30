import { logUserIn } from '../actions';
import { LOG_USER_IN } from '../constants';

describe('LoginPageContainer actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LOG_USER_IN,
      };
      expect(logUserIn()).toEqual(expected);
    });
  });
});
