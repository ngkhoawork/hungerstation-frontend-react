import React from 'react';
import PropTypes from 'prop-types';
import StyledLogo from './StyledLogo';

const BrandLogo = ({ src, size = 32, isWithMargin }) => (
  <StyledLogo src={src} alt="" size={size} isWithMargin={isWithMargin} />
);

BrandLogo.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  isWithMargin: PropTypes.bool,
};

export default BrandLogo;
