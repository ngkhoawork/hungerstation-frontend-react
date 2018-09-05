/**
 *
 * RegistrationFormContainer
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { validationSchemas } from 'utils/form/validation';

import LoginForm from 'components/LoginForm';

import { loginRequest } from 'containers/LoginPageContainer/actions';
import { FormContainer } from 'containers/Form';

const mapDispatchToProps = {
  onSubmit: loginRequest,
};

const schema = validationSchemas('signinForm');

@connect(
  null,
  mapDispatchToProps,
)
@FormContainer
export default class LoginFormContainer extends PureComponent {
  static propTypes = {
    clearFormAction: PropTypes.func.isRequired,
  };

  render() {
    const {
      error,
      submitting,
      intl,
      classes,
      onSubmit,
      submitHandler,
    } = this.props;
    return (
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
  }
}
