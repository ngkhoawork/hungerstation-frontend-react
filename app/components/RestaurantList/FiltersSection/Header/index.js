import React from 'react';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import StyledAction from 'components/Footer/BottomSection/DeliveryRegionsMobile/StyledAction';

import StyledHeader from './StyledHeader';

const Header = () => (
  <StyledHeader>
    <Paragraph size="big">Filters</Paragraph>
    <StyledAction>
      <Paragraph>Clear All</Paragraph>
      <Icon name="tick" />
    </StyledAction>
  </StyledHeader>
);

export default Header;
