import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocaleToggle from 'containers/LocaleToggle';
import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import { StyledLink } from 'utils/css/styledComponents';
import intl from 'utils/intlService';

import { fuscousGray } from 'utils/css/colors';

import RightSection from './RightSection';
import StyledHeader, { StyledBrandLogo, StyledContent } from './StyledHeader';
import logo from '../../images/hungerstation-logo-shadow.svg';
import messages from './messages';
import DropdownMenu from '../DropdownMenu';

const menu = [
  {
    id: 'profile',
    label: 'My profile',
    icon: 'user',
    to: '/my-profile',
  },
  {
    id: 'order',
    label: 'My orders',
    icon: 'user',
    to: '/my-orders',
  },
  {
    id: 'wallet',
    label: 'My wallet',
    icon: 'user',
    to: '/my-wallet',
  },
  {
    id: 'favorite',
    label: 'Favorite',
    icon: 'user',
    to: '/favorite',
  },
  {
    id: 'card',
    label: 'Credit card info',
    icon: 'user',
    to: '/credit-card-info',
  },
];

const Header = ({ variant, isLoggedIn = false, userInfo = null }) => (
  <StyledHeader gold={variant === 'gold'}>
    <StyledContent>
      <Link to="/">
        <StyledBrandLogo alt="logo" src={logo} height={53} />
      </Link>
      <RightSection>
        <LocaleToggle variant={variant} />
        {isLoggedIn ? (
          <DropdownMenu label={userInfo.name} items={menu} leftIcon="basket" />
        ) : (
          <StyledLink to="/login">
            <Paragraph class="" color={variant ? fuscousGray : 'white'}>
              {intl.formatMessage(messages.login)}
            </Paragraph>
          </StyledLink>
        )}
        <CircledItem color="gold" width={28} withShadow>
          <Icon name="basket" />
        </CircledItem>
      </RightSection>
    </StyledContent>
  </StyledHeader>
);

Header.propTypes = {
  variant: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  userInfo: PropTypes.object,
};

export default Header;
