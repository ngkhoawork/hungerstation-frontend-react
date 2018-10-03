import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocaleToggle from 'containers/LocaleToggle';
import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import { StyledLink } from 'utils/css/styledComponents';

import { fuscousGray } from 'utils/css/colors';

import RightSection from './RightSection';
import StyledHeader, { StyledBrandLogo } from './StyledHeader';
import logo from '../../images/hungerstation-logo-shadow.svg';

const Header = ({ variant }) => (
  <StyledHeader gold={variant === 'gold'}>
    <Link to="/">
      <StyledBrandLogo alt="logo" src={logo} height={53} />
    </Link>
    <RightSection>
      <LocaleToggle variant={variant} />
      <StyledLink to="/login">
        <Paragraph color={variant ? fuscousGray : 'white'}>Log in</Paragraph>
      </StyledLink>
      <CircledItem color="gold" width={28} withShadow>
        <Icon name="basket" />
      </CircledItem>
    </RightSection>
  </StyledHeader>
);

Header.propTypes = {
  variant: PropTypes.string,
};

export default Header;
