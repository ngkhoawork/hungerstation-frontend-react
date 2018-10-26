import React from 'react';

import ContainerDimensions from 'react-container-dimensions';
import StyledSection from './StyledSection';
import DeliveryRegions from './DeliveryRegions';

const BottomSection = () => (
  <ContainerDimensions>
    {({ width }) => (
      <StyledSection>
        <DeliveryRegions mobile={width < 850} />
      </StyledSection>
    )}
  </ContainerDimensions>
);

export default BottomSection;
