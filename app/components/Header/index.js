import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocaleToggle from 'containers/LocaleToggle';
import intl from 'utils/intlService';
import { StyledLink } from 'utils/css/styledComponents';
import { fuscousGray } from 'utils/css/colors';
import DropdownMenu from 'components/DropdownMenu';
import BasketIcon from 'containers/BasketIcon';
import logo from 'images/hungerstation-logo-shadow.svg';
import {
  RightSection,
  LeftSection,
  DesktopLocaleToggle,
  MobileLocaleToggle,
  StyledHeader,
  StyledBrandLogo,
  StyledContent,
} from './StyledComponents';
import messages from './messages';

const menu = [
  {
    id: 'profile',
    label: intl.formatMessage(messages.profile),
    icon: 'profile',
    to: '/my-profile',
  },
  {
    id: 'order',
    label: intl.formatMessage(messages.orders),
    icon: 'bag',
    to: '/my-orders',
  },
  // {
  //   id: 'wallet',
  //   label: 'My wallet',
  //   icon: 'user',
  //   to: '/my-wallet',
  // },
  // {
  //   id: 'favorite',
  //   label: 'Favorite',
  //   icon: 'user',
  //   to: '/favorite',
  // },
  // {
  //   id: 'card',
  //   label: 'Credit card info',
  //   icon: 'user',
  //   to: '/credit-card-info',
  // },
];

const getLeftIcon = name => {
  if (!name) return '';

  const nameParts = name.split(' ');

  return nameParts[1] ? nameParts[1][0] : nameParts[0][0];
};

const Header = ({ variant, isLoggedIn = false, userInfo = {}, ...props }) => {
  const dropdownMenu = menu.concat({
    id: 'logout',
    label: intl.formatMessage(messages.logout),
    icon: 'log-out',
    onClick: props.logout,
  });

  return (
    <StyledHeader gold={variant === 'gold'} {...props}>
      <StyledContent>
        <LeftSection>
          <Link to="/">
            <StyledBrandLogo alt="logo" src={logo} height={53} />
          </Link>
          <DesktopLocaleToggle>
            <LocaleToggle variant={variant} />
          </DesktopLocaleToggle>
        </LeftSection>
        <RightSection>
          <MobileLocaleToggle>
            <LocaleToggle variant={variant} />
          </MobileLocaleToggle>
          {isLoggedIn ? (
            <DropdownMenu
              label={userInfo.name}
              items={dropdownMenu}
              leftIcon={getLeftIcon(userInfo.name)}
              isRightAligned
              isHidden={props.isShown === false}
              isLight={!variant}
            />
          ) : (
            <StyledLink
              to={{ pathname: '/login', state: { from: props.location } }}
            >
              <div
                style={{ color: variant ? fuscousGray : 'white', fontSize: 16 }}
              >
                {intl.formatMessage(messages.login)}
              </div>
            </StyledLink>
          )}
          <BasketIcon isRaised={variant === 'gold'} />
        </RightSection>
      </StyledContent>
    </StyledHeader>
  );
};

Header.propTypes = {
  variant: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  userInfo: PropTypes.object,
};

export default Header;
