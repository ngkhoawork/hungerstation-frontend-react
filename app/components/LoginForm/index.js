/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'formik';
import Button from '@material-ui/core/Button';
import { List } from 'immutable';

import TextItem from 'components/TextItem';
import TextInput from 'components/TextInput';
import Icon from 'components/Icon';

import intl from 'utils/intlService';
import { printErrors } from 'utils/form/helpers';
import StyledForm from 'components/StyledForm';
import messages from './messages';

const Checkbox = ({ field, label }) => (
  <label htmlFor="checkbox">
    <input {...field} id="checkbox" type="checkbox" hidden />
    <TextItem size={14} fontFamily="regular">
      <Icon
        name={field.value ? 'checkbox-checked' : 'checkbox-unchecked'}
        size={16}
      />
      <span
        style={{
          marginLeft: '3px',
          verticalAlign: 'text-top',
          lineHeight: '16px',
        }}
      >
        {label}
      </span>
    </TextItem>
  </label>
);

const LoginForm = ({ handleSubmit, submitting, classes, error }) => (
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
    <div style={{ marginTop: '0.5em' }}>
      <Field
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
        <Icon name="plus" size={16} />
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
