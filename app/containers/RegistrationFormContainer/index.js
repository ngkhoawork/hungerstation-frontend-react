/**
 *
 * RegistrationFormContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { compose, pure } from 'recompose';

import { validationSchemas } from 'utils/form/validation';
import withFormState from 'hocs/withFormState';
import { registerAction } from 'modules/user/actions';

import RegistrationForm from './RegistrationForm/index';

const schema = validationSchemas('signupForm');

const enhanced = compose(
  connect(
    null,
    { registerAction },
  ),
  withFormState,
  pure,
);

export const RegistrationFormContainer = ({
  error,
  submitting,
  intl,
  classes,
  submitHandler,
  registerAction, // eslint-disable-line no-shadow
}) => (
  <Formik
    onSubmit={submitHandler(registerAction)}
    initialValues={{
      name: '',
      phone: '',
      mobile: '',
      email: '',
      password: '',
      repeatPassword: '',
    }}
    validationSchema={schema}
    validateOnBlur={false}
    render={props => (
      <RegistrationForm
        {...props}
        error={error}
        submitting={submitting}
        intl={intl}
        classes={classes}
      />
    )}
  />
);

export default enhanced(RegistrationFormContainer);
