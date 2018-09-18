import { LOGIN_REQUEST, REGISTER_REQUEST } from './constants';

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

export const registerRequest = (
  { name, mobile, email, password },
  redirectToRoute,
) => ({
  type: REGISTER_REQUEST,
  name,
  mobile,
  email,
  password,
  redirectToRoute,
});
