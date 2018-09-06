import { LOGIN_REQUEST } from './constants';

export const loginRequest = (
  { mobile, password, ...rest },
  redirectToRoute,
) => ({
  type: LOGIN_REQUEST,
  mobile,
  password,
  ...rest,
  redirectToRoute,
});
