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
import Button from '@material-ui/core/Button';

import intl from 'utils/intlService';
import { StyledForm, StyledFieldWrapper } from 'utils/css/styledComponents';

import TextInput from 'components/TextInput';

import messages from './messages';

const ForgotPasswordForm = ({ handleSubmit, submitting, classes }) => (
  <StyledForm onSubmit={handleSubmit}>
    <StyledFieldWrapper
      fullWidth
      name="password"
      type="password"
      component={TextInput}
      label={intl.formatMessage(messages.password)}
    />
    <StyledFieldWrapper
      fullWidth
      name="repeatPassword"
      type="password"
      component={TextInput}
      label={intl.formatMessage(messages.repeatPassword)}
    />
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
