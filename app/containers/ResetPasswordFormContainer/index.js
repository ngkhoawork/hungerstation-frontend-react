/**
 *
 * ForgotPasswordFormContainer
 *
 */

import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { validationSchemas } from 'utils/form/validation';
import ResetPasswordForm from 'components/ResetPasswordForm';
import { FormContainer } from 'containers/Form';

@FormContainer
export default class ResetPasswordFormContainer extends PureComponent {
  render() {
    const { submitHandler } = this.props;

    const submit = values => {
      console.log(values);
      // start saga
    };

    return (
      <Formik
        onSubmit={submitHandler(submit)}
        initialValues={{ password: '', repeatPassword: '' }}
        validationSchema={validationSchemas('resetPasswordForm')}
        render={props => <ResetPasswordForm {...props} {...this.props} />}
      />
    );
  }
}
