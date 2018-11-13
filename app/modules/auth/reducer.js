/*
 * The reducer takes care of state changes in our app through actions
 */
import { fromJS } from 'immutable';
import {
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
  UPDATE_TOKENS,
  SET_CURRENT_USER,
} from './constants';

// The initial application state
const initialState = fromJS({
  formState: {
    username: '',
    password: '',
  },
  error: '',
  currentlySending: false,
  tokens: {
    accessToken: null,
    refreshToken: null,
    accessTokenExpiresAt: null,
  },
  currentUser: {},
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return onSetAuth(state, action);
    case SENDING_REQUEST:
      return onSendingRequest(state, action);
    case REQUEST_ERROR:
      return onRequestError(state, action);
    case CLEAR_ERROR:
      return onClearError(state);
    case SET_CURRENT_USER:
      return onSetCurrentUser(state, action);
    case UPDATE_TOKENS:
      return onUpdateTokens(state, action);
    default:
      return state;
  }
}

const onSetAuth = (state, action) => {
  const { newAuthState } = action;

  return state.merge({
    loggedIn: newAuthState,
  });
};

const onSendingRequest = (state, action) => {
  const { sending } = action;

  return state.merge({
    currentlySending: sending,
  });
};

const onRequestError = (state, action) => {
  const { error } = action;

  return state.merge({
    error,
  });
};

const onSetCurrentUser = (state, action) => {
  const { user } = action;

  return state.merge({
    currentUser: user,
    loggedIn: true,
  });
};

const onClearError = state => state.merge({ error: '' });

const onUpdateTokens = (state, action) => {
  const { tokens } = action;
  return state.merge({
    tokens,
    loggedIn: true,
  });
};

export default reducer;
