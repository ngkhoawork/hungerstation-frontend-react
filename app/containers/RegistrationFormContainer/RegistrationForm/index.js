/**
 *
 * RegistrationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { printErrors } from 'utils/form/helpers';
import intl from 'utils/intlService';
import { StyledForm, StyledFieldWrapper } from 'utils/css/styledComponents';

import TextInput from 'components/TextInput';
import MobileNumber from 'components/PhoneNumberInput';

import messages from './messages';

const RegistrationForm = ({ handleSubmit, submitting, classes, error }) => (
  <StyledForm onSubmit={handleSubmit} autoComplete="off" noValidate>
    {printErrors(error)}
    <StyledFieldWrapper
      autoComplete="nope"
      name="name"
      type="text"
      component={TextInput}
      label={intl.formatMessage(messages.usernameLabel)}
      fullWidth
    />
    <StyledFieldWrapper
      autoComplete="nope"
      name="phone"
      component={MobileNumber}
      label={intl.formatMessage(messages.numberLabel)}
    />
    <StyledFieldWrapper
      InputProps={{
        noValidate: true,
      }}
      autoComplete="nope"
      name="email"
      type="email"
      component={TextInput}
      label={intl.formatMessage(messages.emailLabel)}
      fullWidth
    />
    <StyledFieldWrapper
      autoComplete="nope"
      name="password"
      type="password"
      component={TextInput}
      label={intl.formatMessage(messages.passwordLabel)}
      fullWidth
    />
    <StyledFieldWrapper
      autoComplete="nope"
      name="repeatPassword"
      type="password"
      component={TextInput}
      label={intl.formatMessage(messages.repeatPassword)}
      fullWidth
    />
    <Button
      className={classes.button}
      size="large"
      fullWidth
      color="primary"
      variant="contained"
      type="submit"
      disabled={submitting}
    >
      <span className={classes.buttonText}>
        {intl.formatMessage(messages.buttonLabel)}
      </span>
    </Button>
  </StyledForm>
);

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  error: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default RegistrationForm;
