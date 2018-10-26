import createAction from 'utils/actions/createAction';
// TODO add typing (Flow or typeScript), and delete payloadDescriptor function
export const loginAction = createAction(
  'users/LOGIN',
  ({ mobile, password }) => ({ mobile, password }),
);
export const registerAction = createAction(
  'users/REGISTER',
  ({ name, mobile, email, password, redirectToRoute }) => ({
    name,
    mobile,
    email,
    password,
    redirectToRoute,
  }),
);
