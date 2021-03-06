import { request, protectedRequest, arbitraryRequest } from 'utils/api';
import {
  userQuery,
  authenticateUserMutation,
  createUserMutation,
  refreshTokenMutation,
} from './query';

const register = credentials => request(createUserMutation, credentials);

const login = credentials => request(authenticateUserMutation, credentials);

const logout = () => Promise.resolve(true);

const refreshToken = token =>
  arbitraryRequest({ RefreshToken: token }, refreshTokenMutation);

const getUser = token => protectedRequest(token, userQuery);

export default { register, login, logout, refreshToken, getUser };
