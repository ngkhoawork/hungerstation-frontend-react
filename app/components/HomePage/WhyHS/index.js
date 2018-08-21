import React from 'react';

import BananaSandwich from 'images/banana-sandwich.jpg';
import StyledContainer from './StyledContainer';
import ExplanationBox from './ExplanationBox';
import Image from './Image';

const WhyHS = () => (
  <StyledContainer>
    <Image src={BananaSandwich} alt="Holding Burger" />
    <ExplanationBox />
  </StyledContainer>
);

export default WhyHS;
