import { loginRequest } from '../actions';
import { LOGIN_REQUEST } from '../constants';

describe('LoginPageContainer actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LOGIN_REQUEST,
      };
      expect(loginRequest()).toEqual(expected);
    });
  });
});
