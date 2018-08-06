import React from 'react';
import { Field, reduxForm, Form } from 'redux-form/immutable'; // <--- immutable import

const validate = values => {
  // IMPORTANT: values is an Immutable.Map here!
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
  } else if (Number.isNaN(Number(values.get('age')))) {
    errors.age = 'Must be a number';
  } else if (Number(values.get('age')) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

const warn = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  if (values.get('username') && /[^a-zA-Z0-9 ]/i.test(values.get('username'))) {
    errors.username = 'Only alphanumeric characters';
  }
  if (values.get('email') && /.+@aol\.com/.test(values.get('email'))) {
    errors.email = 'Really? You still use AOL for your email?';
  }
  if (values.get('age') && values.get('age') < 13) {
    errors.age = 'You do not meet the minimum age requirement!';
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const ImmutableForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="phone"
        type="phone"
        component={renderField}
        label="Mobile number"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'signupform', // a unique identifier for this form
  validate,
  warn,
})(ImmutableForm);
