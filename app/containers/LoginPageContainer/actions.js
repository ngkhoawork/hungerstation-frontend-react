/*
 *
 * LoginPageContainer actions
 *
 */

import { LOG_USER_IN } from './constants';

export const logUserIn = (number, password) => ({
  type: LOG_USER_IN,
  number,
  password,
});
