let localStorage;

/* eslint-disable global-require, prefer-destructuring */
// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage');
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}
/* eslint-enable global-require, prefer-destructuring */

const auth = {
  /**
   * Logs a user in, returning a promise with `true` when done
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  login(/* username, password */) {
    if (auth.loggedIn()) return Promise.resolve(true);

    // Post a fake request
    // return request.post('/login', { username, password }).then(response => {
    //   // Save token to local storage
    //   localStorage.token = response.token;
    //   return Promise.resolve(true);
    // });
    localStorage.token = 'loggedIn';
    return Promise.resolve(true);
  },
  /**
   * Logs the current user out
   */
  logout() {
    // return request.post('/logout');
    localStorage.removeItem('token');
    return Promise.resolve(true);
  },
  /**
   * Checks if a user is logged in
   */
  loggedIn() {
    return !!localStorage.token;
  },
  /**
   * Registers a user and then logs them in
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  register(username, password) {
    return (
      // request
      //   .post('/register', { username, password })
      // Log user in after registering
      Promise.resolve(true).then(() => auth.login(username, password))
    );
  },
  onChange() {},
};

export default auth;
