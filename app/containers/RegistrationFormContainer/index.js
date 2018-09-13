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

import { registerRequest } from 'modules/user/actions';
import { FormContainer } from 'containers/Form';

import RegistrationForm from './RegistrationForm/index';

const schema = validationSchemas('signupForm');

const mapDispatchToProps = {
  onSubmit: registerRequest,
};

const enhanced = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  FormContainer,
  pure,
);

const RegistrationFormContainer = ({
  error,
  submitting,
  intl,
  classes,
  submitHandler,
  onSubmit,
}) => (
  <Formik
    onSubmit={submitHandler(onSubmit)}
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
