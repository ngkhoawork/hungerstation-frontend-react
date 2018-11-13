import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';

import { silverChalice } from 'utils/css/colors';
import Paragraph from 'components/Paragraph';
import {
  ContentWrapper,
  StyledFiltersCategoryWrapper,
  StyledItem,
  Header,
} from './Styled';

import messages from './messages';

const menus = [
  {
    id: 1,
    label: intl.formatMessage(messages.myOrders),
    to: '/my-orders',
  },
  {
    id: 2,
    label: intl.formatMessage(messages.favourites),
    to: '/favourites',
  },
  {
    id: 3,
    label: intl.formatMessage(messages.creditCardInfo),
    to: '/my-card',
  },
  {
    id: 4,
    label: intl.formatMessage(messages.myWallet),
    to: '/my-wallet',
  },
  {
    id: 5,
    label: intl.formatMessage(messages.accountSettings),
    to: '/account-settings',
  },
];

const ProfileNav = ({ active }) => (
  <ContentWrapper>
    <StyledFiltersCategoryWrapper>
      <Header>
        <Paragraph size={22}>{intl.formatMessage(messages.account)}</Paragraph>
      </Header>
      {menus.map(({ id, label, to }) => (
        <StyledItem key={id} to={to} selected={active === to}>
          <Paragraph color={active === to ? 'black' : silverChalice}>
            {label}
          </Paragraph>
        </StyledItem>
      ))}
    </StyledFiltersCategoryWrapper>
  </ContentWrapper>
);

ProfileNav.propTypes = {
  active: PropTypes.string,
};

export default ProfileNav;
