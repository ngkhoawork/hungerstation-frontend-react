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

export const getTokenExpire = token => {
  const { exp } = parseJwt(token);
  // backend returns expire in number of seconds since January 1st 1970
  return exp ? exp * 1000 : Date.now() + 60 * 60 * 1000;
};
