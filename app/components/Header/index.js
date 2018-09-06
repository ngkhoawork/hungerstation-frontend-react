/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocaleToggle from 'containers/LocaleToggle';
import TextLink from 'components/TextLink';
import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';

import { fuscousGray } from 'utils/colors';

import RightSection from './RightSection';
import Circle from './Circle';
import StyledHeader from './StyledHeader';
import logo from '../../images/hungerstation.svg';

const Header = ({ variant }) => (
  <StyledHeader>
    <Link to="/">
      <img alt="logo" src={logo} height="34px" />
    </Link>
    <RightSection>
      <LocaleToggle variant={variant} />
      <TextLink to="/login">
        <Paragraph color={variant === 'dark' ? fuscousGray : 'white'}>
          Log in
        </Paragraph>
      </TextLink>
      <Circle>
        <Icon name="basket" />
      </Circle>
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
