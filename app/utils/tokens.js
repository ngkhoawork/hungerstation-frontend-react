export const isAccessExpired = error =>
  error.statusCode &&
  error.error &&
  error.message &&
  error.error === 'Unauthorized' &&
  error.statusCode === 401 &&
  error.message === 'Invalid token: access token has expired';

export const parseJwt = token => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};
