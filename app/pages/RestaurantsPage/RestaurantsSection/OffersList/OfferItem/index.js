import React from 'react';
import { offerPropTypes } from 'propTypes/offers';

import StyledOfferItem from './StyledOfferItem';
import BrandDetails from './BrandDetails';
import OfferDetails from './OfferDetails';

const OfferItem = ({ offer }) => (
  <StyledOfferItem>
    <BrandDetails brand={offer.get('brand')} />
    <OfferDetails
      title={offer.get('title')}
      description={offer.get('description')}
    />
  </StyledOfferItem>
);

OfferItem.propTypes = {
  offer: offerPropTypes,
};

export default OfferItem;
