import React from 'react';
import PropTypes from 'prop-types';

import BrandLogo from 'components/BrandLogo';
import StyledUpperPart from './StyledUpperPart';

const UpperPart = ({ brandSrc }) => (
  <StyledUpperPart>
    <BrandLogo src={brandSrc} />
  </StyledUpperPart>
);

UpperPart.propTypes = {
  brandSrc: PropTypes.string.isRequired,
};

export default UpperPart;
