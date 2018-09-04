import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import StyledOfferDetails from './StyledOfferDetails';

const OfferDetails = ({ title, description }) => (
  <StyledOfferDetails>
    <Paragraph size="big" color="white">
      {title}
    </Paragraph>
    <Paragraph light color="white">
      {description}
    </Paragraph>
  </StyledOfferDetails>
);

OfferDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OfferDetails;
