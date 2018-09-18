/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocaleToggle from 'containers/LocaleToggle';
import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import { StyledLink } from 'utils/styledComponents';

import { fuscousGray } from 'utils/colors';

import RightSection from './RightSection';
import StyledHeader from './StyledHeader';
import logo from '../../images/hungerstation.svg';

const Header = ({ variant }) => (
  <StyledHeader>
    <Link to="/">
      <img alt="logo" src={logo} height="34px" />
    </Link>
    <RightSection>
      <LocaleToggle variant={variant} />
      <StyledLink to="/login">
        <Paragraph color={variant === 'dark' ? fuscousGray : 'white'}>
          Log in
        </Paragraph>
      </StyledLink>
      <CircledItem color="white" width={28}>
        <Icon name="basket" />
      </CircledItem>
    </RightSection>
  </StyledHeader>
);

Header.propTypes = {
  variant: PropTypes.string,
};

Header.defaultProps = {
  variant: 'dark',
};

export default Header;
