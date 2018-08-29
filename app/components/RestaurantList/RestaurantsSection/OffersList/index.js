import React from 'react';
import PropTypes from 'prop-types';

import StyledOffersList from './StyledOffersList';
import OfferItem from './OfferItem';

const OffersList = ({ offers }) => (
  <StyledOffersList>
    {offers.map(offer => <OfferItem key={offer.id} {...offer} />)}
  </StyledOffersList>
);

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OffersList;
