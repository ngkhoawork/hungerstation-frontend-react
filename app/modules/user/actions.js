import createAction from 'utils/actions/createAction';

const LOGIN_REQUEST = 'users/LOGIN_REQUEST';
const REGISTER_REQUEST = 'users/REGISTER_REQUEST';

// TODO add typing (Flow or typeScript)
export const loginAction = createAction(LOGIN_REQUEST);
export const registerAction = createAction(REGISTER_REQUEST);
