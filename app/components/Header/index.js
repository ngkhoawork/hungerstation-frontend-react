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
      <img alt="logo" src={logo} height="34px" />
    </Link>
    <RightSection>
      <LocaleToggle />
      <TextLink to="/login">
        <FormattedMessage {...messages.login} />
      </TextLink>
      <Circle>
        <Icon name="basket" />
      </Circle>
    </RightSection>
  </StyledHeader>
);

export default Header;
