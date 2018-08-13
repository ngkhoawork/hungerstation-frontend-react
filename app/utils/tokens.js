export const isAccessExpired = error =>
  error.statusCode &&
  error.error &&
  error.message &&
  error.error === 'Unauthorized' &&
  error.statusCode === 401 &&
  error.message === 'Invalid token: access token has expired';
