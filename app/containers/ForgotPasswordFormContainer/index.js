/**
 *
 * ForgotPasswordFormContainer
 *
 */

import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { validationSchemas } from 'utils/form/validation';
import ForgotPasswordForm from 'components/ForgotPasswordForm';
import { FormContainer } from 'containers/Form';

const schema = validationSchemas('resetPasswordRequestForm');

@FormContainer
export default class ForgotPasswordFormContainer extends PureComponent {
  render() {
    const { submitHandler } = this.props;

    const submit = values => {
      console.log(values);
      // start saga
    };

    return (
      <Formik
        onSubmit={submitHandler(submit)}
        initialValues={{ email: '' }}
        validationSchema={schema}
        validateOnBlur={false}
        render={props => <ForgotPasswordForm {...props} {...this.props} />}
      />
    );
  }
}
