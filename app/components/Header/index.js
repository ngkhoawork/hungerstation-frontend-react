/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import StyledHeader from './StyledHeader';

import logo from '../../images/logo.png';

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img alt="logo" src={logo} />
    </Link>
    <Link to="/register">
      <FormattedMessage {...messages.register} />
    </Link>
    <Link to="/login">
      <FormattedMessage {...messages.login} />
    </Link>
  </StyledHeader>
);

export default Header;
