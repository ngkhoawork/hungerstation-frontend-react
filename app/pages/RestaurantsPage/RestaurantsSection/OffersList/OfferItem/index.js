import React from 'react';
import PropTypes from 'prop-types';

import StyledOfferItem from './StyledOfferItem';
import BrandDetails from './BrandDetails';
import OfferDetails from './OfferDetails';

const OfferItem = ({ brand, title, description }) => (
  <StyledOfferItem>
    <BrandDetails brand={brand} />
    <OfferDetails title={title} description={description} />
  </StyledOfferItem>
);

OfferItem.propTypes = {
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OfferItem;
