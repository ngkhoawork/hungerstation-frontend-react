const validate = (values, formName) => {
  switch (formName) {
    case 'login':
      return LoginFormValidation(values);
    case 'registration':
      return RegistrationFormValidation(values);
    default:
      return {};
  }
};

const RegistrationFormValidation = values => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = 'Required';
  } else if (values.get('username').length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('age')) {
    errors.age = 'Required';
  } else if (!Number(values.get('age'))) {
    errors.age = 'Must be a number';
  } else if (Number(values.get('age')) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
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
