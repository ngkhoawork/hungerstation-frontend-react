import messages from './messages';

const validate = (values, intl, formName) => {
  switch (formName) {
    case 'login':
      return LoginFormValidation(values, intl);
    case 'registration':
      return RegistrationFormValidation(values, intl);
    default:
      return {};
  }
};

const RegistrationFormValidation = (values, intl) => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = intl.formatMessage(messages.formRequired);
  } else if (
    values.get('username').length < 2 ||
    values.get('username').length > 20
  ) {
    errors.username =
      'The name needs to be at least 2 characters and the maximum 20 characters';
  }

  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }

  if (!values.get('number')) {
    errors.number = 'Required';
  } else if (!/^[0-9]/i.test(values.get('number'))) {
    errors.number = 'Invalid phone number';
  } else if (values.get('number').length > 9) {
    errors.number = 'The mobile number needs to be at most 9 characters';
  }

  if (!values.get('password')) {
    errors.password = 'Required';
  } else if (
    values.get('password').length < 8 ||
    values.get('password').length > 20
  ) {
    errors.password =
      'The password needs to be at least 2 characters and the maximum 20 characters';
  }

  return errors;
};

const LoginFormValidation = values => {
  const errors = {};
  if (!values.get('number')) {
    errors.number = 'Required';
  } else if (values.get('number').length > 15) {
    errors.number = 'Must be 15 characters or less';
  }
  if (!values.get('password')) {
    errors.password = 'Required';
  }
  return errors;
};

export default validate;
