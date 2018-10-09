/**
 *
 * UserProfile
 *
 */

import React from 'react';
import intl from 'utils/intlService';

import messages from './messages';
// import PropTypes from 'prop-types';

const UserProfile = () => <h1>{intl.formatMessage(messages.welcome)}</h1>;

UserProfile.propTypes = {};

export default UserProfile;
