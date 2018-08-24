import { defineMessages } from 'react-intl';

export default defineMessages({
  formRequired: {
    id: 'validation',
    defaultMessage: 'Required',
  },
  nameLength: {
    id: 'form.name.length',
    defaultMessage:
      'The name needs to be at least 2 characters and the maximum 20 characters',
  },
  password: {
    id: 'form.password',
    defaultMessage:
      'The password needs to be at least 8 characters and the maximum 20 characters',
  },
  passwordMatch: {
    id: 'form.passwordMatch',
    defaultMessage: `Passwords don't match`,
  },
  email: {
    id: 'form.email',
    defaultMessage: 'Invalid email address',
  },
  mobileLength: {
    id: 'form.mobile.length',
    defaultMessage: 'The mobile number needs to be at most 9 characters',
  },
  mobileRegex: {
    id: 'form.mobile.regex',
    defaultMessage: 'Invalid phone number',
  },
});
