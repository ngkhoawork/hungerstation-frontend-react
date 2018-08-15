/*
 * The reducer takes care of state changes in our app through actions
 */
import { fromJS } from 'immutable';
import {
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
  AUTHENTICATE_USER,
  UPDATE_TOKENS,
} from './authConstants';

// The initial application state
const initialState = fromJS({
  formState: {
    username: '',
    password: '',
  },
  error: '',
  currentlySending: false,
  loggedIn: false,
  tokens: {
    accessToken: null,
    refreshToken: null,
    accessTokenExpiresAt: null,
  },
  userId: null,
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
    case AUTHENTICATE_USER:
      return onAuthenticateUser(state, action);
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

const onAuthenticateUser = (state, action) => {
  const { refreshToken, accessToken, accessTokenExpiresAt, userId } = action;

  return state.merge({
    tokens: {
      refreshToken,
      accessToken,
      accessTokenExpiresAt,
    },
    userId,
    isLoggedIn: true,
  });
};

const onClearError = state => state.merge({ error: '' });

const onUpdateTokens = (state, action) => {
  const { tokens } = action;
  return state.merge({
    tokens,
  });
};

export default reducer;
