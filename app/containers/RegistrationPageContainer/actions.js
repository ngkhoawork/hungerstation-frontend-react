import { REGISTER_REQUEST } from './constants';

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
