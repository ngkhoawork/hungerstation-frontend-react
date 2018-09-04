import React from 'react';
import PropTypes from 'prop-types';
import BurgerKing from 'images/burgerking.png';

import BrandLogo from 'components/BrandLogo';
import Paragraph from 'components/Paragraph';
import StyledBrandDetails from './StyledBrandDetails';

const BrandDetails = ({ brand }) => (
  <StyledBrandDetails>
    <BrandLogo src={BurgerKing} />
    <Paragraph color="white">{brand}</Paragraph>
  </StyledBrandDetails>
);

BrandDetails.propTypes = {
  brand: PropTypes.string.isRequired,
};

export default BrandDetails;
