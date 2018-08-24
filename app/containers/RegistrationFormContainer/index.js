/**
 *
 * RegistrationFormContainer
 *
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { validationSchemas } from 'utils/form/validation';

import { registerRequest } from 'containers/RegistrationPageContainer/actions';
import { FormContainer } from 'containers/Form';

import RegistrationForm from 'components/RegistrationForm';

const mapDispatchToProps = {
  onSubmit: registerRequest,
};

@connect(
  null,
  mapDispatchToProps,
)
@FormContainer
export default class RegistrationFormContainer extends PureComponent {
  render() {
    const {
      error,
      submitting,
      intl,
      classes,
      submitHandler,
      onSubmit,
    } = this.props;

    return (
      <Formik
        onSubmit={submitHandler(onSubmit)}
        initialValues={{
          name: '',
          mobile: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchemas('signupForm')}
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
  }
}
