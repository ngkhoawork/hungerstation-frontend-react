/*
 * Header Messages
 *
 * This contains all the text for the LoginForm component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.ContactUsPage.header',
    defaultMessage: 'Contact us!',
  },
  subheader: {
    id: 'app.containers.ContactUsPage.subheader',
    defaultMessage: 'Questions? Suggestions? Fell free to contact us',
  },
  haveAccount: {
    id: 'app.containers.RegistrationPage.haveAccount',
    defaultMessage: 'Already have an account?',
  },
  send: {
    id: 'app.containers.ContactUsPage.send',
    defaultMessage: 'Send',
  },
  numberLabel: {
    id: 'app.components.ContactUsForm.numberLabel',
    defaultMessage: 'Mobile Number',
  },
  passwordLabel: {
    id: 'app.components.ContactUsForm.passwordLabel',
    defaultMessage: 'Password',
  },
  rememberMeLabel: {
    id: 'app.components.ContactUsForm.rememberMeLabel',
    defaultMessage: 'Remember me',
  },
});
