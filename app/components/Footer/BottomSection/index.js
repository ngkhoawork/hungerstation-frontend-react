import React from 'react';

import StyledSection from './StyledSection';
import DeliveryRegions from './DeliveryRegions';
import DeliveryRegionsMobile from './DeliveryRegionsMobile';

const BottomSection = () => (
  <StyledSection>
    <DeliveryRegions />
    <DeliveryRegionsMobile />
  </StyledSection>
);

export default BottomSection;
