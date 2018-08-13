/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.LoginPage.header',
    defaultMessage: 'Log in',
  },
  subheader: {
    id: 'app.containers.LoginPage.subheader',
    defaultMessage: 'Log in by entering your details below',
  },
  noAccount: {
    id: 'app.containers.LoginPage.noAccount',
    defaultMessage: "Don't have an account?",
  },
  signUp: {
    id: 'app.containers.LoginPage.signUp',
    defaultMessage: 'Sign up',
  },
  forgotPassword: {
    id: 'app.containers.LoginPage.forgotPassword',
    defaultMessage: 'Forgot your password?',
  },
});
