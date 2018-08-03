/**
 *
 * RegistrationForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const RegistrationForm = () => (
  <div>
    <FormattedMessage {...messages.header} />
  </div>
);

RegistrationForm.propTypes = {};

export default RegistrationForm;
