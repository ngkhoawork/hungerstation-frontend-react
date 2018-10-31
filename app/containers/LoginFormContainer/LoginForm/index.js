/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { List } from 'immutable';
import intl from 'utils/intlService';
import { printErrors } from 'utils/form/helpers';
import { StyledForm, StyledFieldWrapper } from 'utils/css/styledComponents';

import TextInput from 'components/TextInput';
import Icon from 'components/Icon';
import Checkbox from 'components/Checkbox';

import messages from './messages';

const LoginForm = ({ handleSubmit, submitting, classes, error }) => (
  <StyledForm onSubmit={handleSubmit}>
    {printErrors(error)}
    <StyledFieldWrapper
      fullWidth
      name="mobile"
      type="text"
      component={TextInput}
      label={intl.formatMessage(messages.numberLabel)}
    />
    <StyledFieldWrapper
      fullWidth
      name="password"
      type="password"
      component={TextInput}
      label={intl.formatMessage(messages.passwordLabel)}
    />
    <div style={{ margin: '16px 0 0' }}>
      <StyledFieldWrapper
        name="rememberMe"
        component={Checkbox}
        label={intl.formatMessage(messages.rememberMeLabel)}
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
      <span className={classes.buttonIcon}>
        <Icon name="+" size={16} />
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
  classes: PropTypes.object.isRequired,
  error: PropTypes.instanceOf(List),
};

export default LoginForm;
