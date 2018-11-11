import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { compose, pure } from 'recompose';

import { validationSchemas } from 'utils/form/validation';

import { loginAction } from 'modules/user/actions';
import withFormState from 'hocs/withFormState';

import LoginForm from './LoginForm/index';

const schema = validationSchemas('signinForm');

const enhnaced = compose(
  connect(
    null,
    { loginAction },
  ),
  withFormState,
  pure,
);

export const LoginFormContainer = ({
  error,
  submitting,
  intl,
  classes,
  loginAction, // eslint-disable-line no-shadow
  submitHandler,
}) => (
  <Formik
    onSubmit={submitHandler(loginAction)}
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
