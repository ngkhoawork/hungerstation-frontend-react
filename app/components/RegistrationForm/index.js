/**
 *
 * RegistrationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { intlShape } from 'react-intl';
import Button from '@material-ui/core/Button';

import TextInput from 'components/TextInput';

import { printErrors } from 'utils/form/helpers';
import StyledForm from 'components/LoginForm/StyledForm';

import messages from './messages';

const RegistrationForm = ({
  handleSubmit,
  submitting,
  intl,
  classes,
  error,
}) => (
  <StyledForm onSubmit={handleSubmit} autoComplete="off">
    {printErrors(error)}
    <div>
      <Field
        autoComplete="nope"
        name="name"
        type="text"
        component={TextInput}
        label={intl.formatMessage(messages.usernameLabel)}
        fullWidth
      />
    </div>
    <div>
      <Field
        autoComplete="nope"
        name="mobile"
        type="phone"
        component={TextInput}
        label="Mobile number"
        fullWidth
      />
    </div>
    <div>
      <Field
        autoComplete="nope"
        name="email"
        type="email"
        component={TextInput}
        label={intl.formatMessage(messages.emailLabel)}
        fullWidth
      />
    </div>
    <div>
      <Field
        autoComplete="nope"
        name="password"
        type="password"
        component={TextInput}
        label={intl.formatMessage(messages.passwordLabel)}
        fullWidth
      />
    </div>
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
  intl: intlShape,
  classes: PropTypes.object.isRequired,
  error: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default RegistrationForm;
