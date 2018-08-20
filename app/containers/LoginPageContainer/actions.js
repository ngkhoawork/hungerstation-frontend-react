import { LOGIN_REQUEST } from './constants';

export const loginRequest = (number, password, redirectToRoute) => ({
  type: LOGIN_REQUEST,
  number,
  password,
  redirectToRoute,
});
