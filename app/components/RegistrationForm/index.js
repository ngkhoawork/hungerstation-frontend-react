/**
 *
 * RegistrationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

import { FormattedMessage } from 'react-intl';

import validate from 'utils/form/validation';
import warn from 'utils/form/warning';
import TextInput from 'components/TextInput';

import messages from './messages';

const RegistrationForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="number">
      <FormattedMessage {...messages.usernameLabel} />
      <Field
        name="username"
        type="text"
        component={TextInput}
        label="Username"
      />
    </label>
    <label htmlFor="email">
      <FormattedMessage {...messages.emailLabel} />
      <Field name="email" type="text" component={TextInput} label="Email" />
    </label>
    <label htmlFor="age">
      <FormattedMessage {...messages.ageLabel} />
      <Field name="age" type="number" component={TextInput} label="Age" />
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

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'signupform', // a unique identifier for this form
  validate: values => validate(values, 'registration'),
  warn: values => warn(values, 'registration'),
})(RegistrationForm);
