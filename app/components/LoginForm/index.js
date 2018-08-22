/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form/immutable';
import { intlShape } from 'react-intl';
import Button from '@material-ui/core/Button';

import TextInput from 'components/TextInput';
import Icon from 'components/Icon';
import { printErrors } from 'utils/form/helpers';
import StyledForm from './StyledForm';
import messages from './messages';

const LoginForm = ({
  handleSubmit,
  submitting,
  intl,
  classes,
  error,
  pristine,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    {printErrors(error)}
    <div>
      <Field
        fullWidth
        name="mobile"
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
      disabled={submitting || pristine}
      fullWidth
      variant="contained"
      color="primary"
      className={classes.button}
    >
      <span className={classes.buttonIcon}>
        <Icon name="plus" size={20} />
      </span>
      <span className={classes.buttonText}>
        {intl.formatMessage(messages.buttonLabel)}
      </span>
    </Button>
  </StyledForm>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  intl: intlShape,
  classes: PropTypes.object.isRequired,
  error: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default LoginForm;
