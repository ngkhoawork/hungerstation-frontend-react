import React from 'react';
import BurgerKing from 'images/burgerking.png';

import BrandLogo from 'components/BrandLogo';
import Paragraph from 'components/Paragraph';
import StyledBrandDetails from './StyledBrandDetails';

const BrandDetails = () => (
  <StyledBrandDetails>
    <BrandLogo src={BurgerKing} />
    <Paragraph color="white">Burger King</Paragraph>
  </StyledBrandDetails>
);

export default BrandDetails;
