/**
 *
 * ForgotPasswordFormContainer
 *
 */

import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { validationSchemas } from 'utils/form/validation';
import { FormContainer } from 'containers/Form';

import ResetPasswordForm from './ResetPasswordForm/index';

const schema = validationSchemas('resetPasswordForm');

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
        validationSchema={schema}
        validateOnBlur={false}
        render={props => <ResetPasswordForm {...props} {...this.props} />}
      />
    );
  }
}
