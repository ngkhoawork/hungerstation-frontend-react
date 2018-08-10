/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';

import messages from './messages';
import StyledHeader from './StyledHeader';
import logo from '../../images/hungerstation.svg';

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img alt="logo" src={logo} height="60px" />
    </Link>
    <Link to="/register">
      <FormattedMessage {...messages.register} />
    </Link>
    <Link to="/login">
      <FormattedMessage {...messages.login} />
    </Link>
    <Link to="/userprofile">
      <FormattedMessage {...messages.userprofile} />
    </Link>
    <LocaleToggle />
  </StyledHeader>
);

export default Header;
