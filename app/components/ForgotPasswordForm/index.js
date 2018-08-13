/**
 *
 * ForgotPasswordForm
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Field, reduxForm } from 'redux-form/immutable';
import { injectIntl, intlShape } from 'react-intl';
import validate from 'utils/form/validation';
import { withStyles } from '@material-ui/core/styles';
import styles from 'utils/styles';

import TextInput from 'components/TextInput';
import Button from '@material-ui/core/Button';

import messages from './messages';

@withStyles(styles)
@injectIntl
@reduxForm({
  form: 'forgotPassword',
  validate: (values, { intl }) => validate(values, intl, 'forgotPassword'),
})
export default class ForgotPasswordForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    intl: intlShape,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { handleSubmit, submitting, intl, classes } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
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
          {intl.formatMessage(messages.buttonLabel)}
        </Button>
      </Form>
    );
  }
}
