import React from 'react';
import PropTypes from 'prop-types';

import BrandLogo from 'components/BrandLogo';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import StyledUpperPart from './StyledUpperPart';
import StyledRating from './StyledRating';

const UpperPart = ({ brandSrc, rating }) => (
  <StyledUpperPart>
    <BrandLogo src={brandSrc} />
    <StyledRating>
      <Icon name="star" />
      <Paragraph color="white" size={12}>
        {rating}
      </Paragraph>
    </StyledRating>
  </StyledUpperPart>
);

UpperPart.propTypes = {
  brandSrc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default UpperPart;
