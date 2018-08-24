import React from 'react';

import Paragrpaph from 'components/Paragrpaph';
import StyledContainer from './StyledContainer';

const QuickFilters = () => (
  <StyledContainer>
    <Paragrpaph color="white">All restaurants</Paragrpaph>
    <Paragrpaph color="white">Top Offers</Paragrpaph>
  </StyledContainer>
);

export default QuickFilters;
