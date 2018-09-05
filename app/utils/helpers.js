// TODO add intl support
export const extractError = error => {
  let err;
  if (error.status === 500) {
    err = error.message;
  } else if (error.response) {
    [err] = error.response.errors;
  } else {
    err = 'Something went terribly wrong';
  }

  return err;
};
