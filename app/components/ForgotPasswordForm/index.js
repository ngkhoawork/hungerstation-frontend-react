/**
 *
 * ForgotPasswordForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Button from '@material-ui/core/Button';

import intl from 'utils/intlService';

import TextInput from 'components/TextInput';
import StyledForm from 'components/StyledForm';

import messages from './messages';

const ForgotPasswordForm = ({ handleSubmit, submitting, classes }) => (
  <StyledForm onSubmit={handleSubmit}>
    <div>
      <Field
        fullWidth
        name="email"
        type="text"
        component={TextInput}
        label={intl.formatMessage(messages.email)}
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
      <span className={classes.buttonText}>
        {intl.formatMessage(messages.buttonLabel)}
      </span>
    </Button>
  </StyledForm>
);

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default ForgotPasswordForm;
