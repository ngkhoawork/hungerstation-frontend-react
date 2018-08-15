import { REGISTER_REQUEST } from './constants';

export const registerRequest = (
  username,
  number,
  email,
  password,
  redirectToRoute,
) => ({
  type: REGISTER_REQUEST,
  username,
  number,
  email,
  password,
  redirectToRoute,
});
