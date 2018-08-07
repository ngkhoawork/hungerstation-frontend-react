/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';

import validate from 'utils/form/validation';
import TextInput from 'components/TextInput';

import messages from './messages';

const LoginForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="number">
      <FormattedMessage {...messages.numberLabel} />
      <Field
        name="number"
        type="text"
        component={TextInput}
        label="Tel number"
      />
    </label>
    <label htmlFor="password">
      <FormattedMessage {...messages.passwordLabel} />
      <Field
        name="password"
        type="text"
        component={TextInput}
        label="Password"
      />
    </label>
    <div>
      <button type="submit" disabled={submitting}>
        Submit
      </button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
        Clear Values
      </button>
    </div>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'loginForm',
  validate: values => validate(values, 'login'),
})(LoginForm);
