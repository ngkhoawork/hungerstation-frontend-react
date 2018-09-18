import React from 'react';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import StyledAction from 'components/Footer/BottomSection/DeliveryRegionsMobile/StyledAction';

import StyledHeader from './StyledHeader';

const Header = () => (
  <StyledHeader>
    <Paragraph size={22}>Filters</Paragraph>
    <StyledAction>
      <Paragraph size={12}>Clear All</Paragraph>
      <Icon name="delete" />
    </StyledAction>
  </StyledHeader>
);

export default Header;
