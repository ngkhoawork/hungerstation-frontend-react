import { LOGIN_REQUEST } from './constants';

export const loginRequest = ({ mobile, password }, redirectToRoute) => ({
  type: LOGIN_REQUEST,
  mobile,
  password,
  redirectToRoute,
});
