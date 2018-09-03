import React from 'react';

import Paragraph from 'components/Paragraph';
import StyledOfferDetails from './StyledOfferDetails';

const OfferDetails = () => (
  <StyledOfferDetails>
    <Paragraph size="big" color="white">
      Minimal price for Double Whooper
    </Paragraph>
    <Paragraph light color="white">
      Promotion available till 28.05.2018
    </Paragraph>
  </StyledOfferDetails>
);

export default OfferDetails;
