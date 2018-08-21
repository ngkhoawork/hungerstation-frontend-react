import messages from './messages';
// import * as yup from 'yup';

const validate = (values, intl, formName) => {
  switch (formName) {
    case 'signin':
      return LoginFormValidation(values, intl);
    case 'signup':
      return RegistrationFormValidation(values, intl);
    case 'forgotPassword':
      return ForgotPasswordForm(values, intl);
    case 'resetPassword':
      return ResetPasswordForm(values, intl);
    default:
      return {};
  }
};

const RegistrationFormValidation = (values, intl) => {
  const errors = {};
  if (!values.get('name')) {
    errors.name = intl.formatMessage(messages.formRequired);
  } else if (values.get('name').length < 2 || values.get('name').length > 20) {
    errors.name =
      'The name needs to be at least 2 characters and the maximum 20 characters';
  }

  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }

  if (!values.get('mobile')) {
    errors.mobile = 'Required';
  } else if (!/^\+966[0-9]/i.test(values.get('mobile'))) {
    errors.mobile = 'Invalid phone number';
  } else if (values.get('mobile').length > 13) {
    errors.mobile = 'The mobile number needs to be at most 9 characters';
  }

  if (!values.get('password')) {
    errors.password = 'Required';
  } else if (
    values.get('password').length < 8 ||
    values.get('password').length > 20
  ) {
    errors.password =
      'The password needs to be at least 8 characters and the maximum 20 characters';
  }

  return errors;
};

const LoginFormValidation = values => {
  const errors = {};
  if (!values.get('mobile')) {
    errors.mobile = 'Required';
  } else if (values.get('mobile').length > 15) {
    errors.mobile = 'Must be 15 characters or less';
  }
  if (!values.get('password')) {
    errors.password = 'Required';
  }
  return errors;
};

const ForgotPasswordForm = values => {
  const errors = {};
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const ResetPasswordForm = values => {
  const errors = {};
  if (!values.get('password')) {
    errors.password = 'Required';
  }
  if (!values.get('repeatPassword')) {
    errors.repeatPassword = 'Required';
  }
  if (errors.password !== errors.repeatPassword) {
    errors.repeatPassword = "Passwords doesn't match";
  }
  return errors;
};

export default validate;
