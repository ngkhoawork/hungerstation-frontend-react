/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

import LocaleToggle from 'containers/LocaleToggle';
import Icon from 'components/Icon';

import RightSection from './RightSection';
import Circle from './Circle';
import StyledHeader from './StyledHeader';
import logo from '../../images/hungerstation.svg';

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img alt="logo" src={logo} height="34px" />
    </Link>
    <RightSection>
      <LocaleToggle />
      <Circle>
        <Icon name="basket" />
      </Circle>
    </RightSection>
  </StyledHeader>
);

export default Header;
