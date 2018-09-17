/**
 *
 * RegistrationFormContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { compose, pure } from 'recompose';

import { validationSchemas } from 'utils/form/validation';

import { loginRequest } from 'modules/user/actions';
import { FormContainer } from 'containers/Form';

import LoginForm from './LoginForm/index';

const schema = validationSchemas('signinForm');

const mapDispatchToProps = {
  onSubmit: loginRequest,
};

const enhnaced = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  FormContainer,
  pure,
);

export const LoginFormContainer = ({
  error,
  submitting,
  intl,
  classes,
  onSubmit,
  submitHandler,
}) => (
  <Formik
    onSubmit={submitHandler(onSubmit)}
    initialValues={{ mobile: '', password: '' }}
    validationSchema={schema}
    validateOnBlur={false}
    render={props => (
      <LoginForm
        {...props}
        error={error}
        submitting={submitting}
        intl={intl}
        classes={classes}
      />
    )}
  />
);

LoginFormContainer.propTypes = {
  clearFormAction: PropTypes.func.isRequired,
};

export default enhnaced(LoginFormContainer);
