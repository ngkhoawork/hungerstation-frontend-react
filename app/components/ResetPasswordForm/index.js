/**
 *
 * ResetPasswordForm
 *
 */

/**
 *
 * ForgotPasswordForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { intlShape } from 'react-intl';
import Button from '@material-ui/core/Button';

import TextInput from 'components/TextInput';
import StyledForm from 'components/StyledForm';

import messages from './messages';

const ForgotPasswordForm = ({ handleSubmit, submitting, intl, classes }) => (
  <StyledForm onSubmit={handleSubmit}>
    <div>
      <Field
        fullWidth
        name="password"
        type="password"
        component={TextInput}
        label={intl.formatMessage(messages.password)}
      />
    </div>
    <div>
      <Field
        fullWidth
        name="repeatPassword"
        type="password"
        component={TextInput}
        label={intl.formatMessage(messages.repeatPassword)}
      />
    </div>
    <Button
      type="submit"
      disabled={submitting}
      fullWidth
      variant="contained"
      color="primary"
      className={classes.button}
    >
      {intl.formatMessage(messages.buttonLabel)}
    </Button>
  </StyledForm>
);

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: intlShape,
  classes: PropTypes.object.isRequired,
};

export default ForgotPasswordForm;
