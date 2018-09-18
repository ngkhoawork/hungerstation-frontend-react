import React from 'react';
import PropTypes from 'prop-types';

import StyledLogo from './StyledLogo';

const BrandLogo = ({ src }) => <StyledLogo src={src} alt="Brand logo" />;

BrandLogo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default BrandLogo;
