/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import Icon from 'components/Icon';
import TextLink from 'components/TextLink';

import RightSection from './RightSection';
import Circle from './Circle';
import messages from './messages';
import StyledHeader from './StyledHeader';
import logo from '../../images/hungerstation.svg';

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img alt="logo" src={logo} height="45px" />
    </Link>
    <RightSection>
      <LocaleToggle />
      <TextLink to="/login">
        <FormattedMessage {...messages.login} />
      </TextLink>
      <Circle>
        <Icon name="basket" size={17} />
      </Circle>
    </RightSection>
  </StyledHeader>
);

// <Link to="/register">
//   <FormattedMessage {...messages.register} />
// </Link>
//
// <Link to="/userprofile">
//   <FormattedMessage {...messages.userprofile} />
// </Link>

export default Header;
