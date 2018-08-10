/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Form, Field, reduxForm } from 'redux-form/immutable';
import { injectIntl, intlShape } from 'react-intl';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import validate from 'utils/form/validation';
import TextInput from 'components/TextInput';

import messages from './messages';

const styles = theme => ({
  button: {
    marginTop: 2 * theme.spacing.unit,
  },
});

const LoginForm = ({ handleSubmit, submitting, intl, classes }) => (
  <Form onSubmit={handleSubmit}>
    <div>
      <Field
        fullWidth
        name="number"
        type="text"
        component={TextInput}
        label={intl.formatMessage(messages.numberLabel)}
      />
    </div>
    <div>
      <Field
        fullWidth
        name="password"
        type="password"
        component={TextInput}
        label={intl.formatMessage(messages.passwordLabel)}
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
  </Form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: intlShape,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  injectIntl(
    reduxForm({
      form: 'loginForm',
      validate: (values, { intl }) => validate(values, intl, 'login'),
    })(LoginForm),
  ),
);
