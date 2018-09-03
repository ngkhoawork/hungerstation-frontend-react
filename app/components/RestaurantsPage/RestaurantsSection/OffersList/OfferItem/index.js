import React from 'react';

import StyledOfferItem from './StyledOfferItem';
import BrandDetails from './BrandDetails';
import OfferDetails from './OfferDetails';

const OfferItem = () => (
  <StyledOfferItem>
    <BrandDetails />
    <OfferDetails />
  </StyledOfferItem>
);

export default OfferItem;
