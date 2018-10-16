/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
  SET_AUTH,
  SENDING_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR,
  SET_CURRENT_USER,
  UPDATE_TOKENS,
  AUTHENTICATE_USER,
} from './constants';

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export const setAuthState = newAuthState => ({
  type: SET_AUTH,
  newAuthState,
});

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export const sendingRequest = sending => ({
  type: SENDING_REQUEST,
  sending,
});

export const logout = () => ({ type: LOGOUT });

export const requestError = error => ({
  type: REQUEST_ERROR,
  error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setCurrentUser = ({ user }) => ({
  type: SET_CURRENT_USER,
  user,
});

export const updateTokens = tokens => ({
  type: UPDATE_TOKENS,
  tokens,
});

export const authenticateUser = () => ({
  type: AUTHENTICATE_USER,
});
