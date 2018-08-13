/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR,
} from './authConstants';

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

export const loginRequest = (number, password, redirectToRoute) => ({
  type: LOGIN_REQUEST,
  number,
  password,
  redirectToRoute,
});

export const logout = () => ({ type: LOGOUT });

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

export const requestError = error => ({
  type: REQUEST_ERROR,
  error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
