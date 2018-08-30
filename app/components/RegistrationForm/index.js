/**
 *
 * RegistrationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { injectIntl, intlShape } from 'react-intl';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import validate from 'utils/form/validation';
import warn from 'utils/form/warning';
import TextInput from 'components/TextInput';
import styles from 'utils/styles';
import StyledForm from 'components/LoginForm/StyledForm';

import messages from './messages';

const RegistrationForm = ({ handleSubmit, submitting, intl, classes }) => (
  <StyledForm onSubmit={handleSubmit} autoComplete="off">
    <div>
      <Field
        autoComplete="nope"
        name="username"
        type="text"
        component={TextInput}
        label={intl.formatMessage(messages.usernameLabel)}
        fullWidth
      />
    </div>
    <div>
      <Field
        autoComplete="nope"
        name="number"
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
      {intl.formatMessage(messages.buttonLabel)}
    </Button>
  </StyledForm>
);

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: intlShape,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  injectIntl(
    reduxForm({
      form: 'signupform', // a unique identifier for this form
      validate: (values, { intl }) => validate(values, intl, 'registration'),
      warn: (values, { intl }) => warn(values, intl, 'registration'),
    })(RegistrationForm),
  ),
);
