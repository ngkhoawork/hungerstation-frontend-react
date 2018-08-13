/**
 *
 * ForgotPasswordPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ForgotPasswordPage = () => (
  <div>
    <FormattedMessage {...messages.header} />
  </div>
);

ForgotPasswordPage.propTypes = {};

export default ForgotPasswordPage;
