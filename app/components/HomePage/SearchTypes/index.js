import React from 'react';

import StyledContainer from '../StyledContainer';
import TextItem from '../TextItem';

const SearchTypes = () => (
  <StyledContainer>
    <TextItem size={15} weight={500} transform="uppercase">
      Delivery
    </TextItem>
    <TextItem size={15} weight={500} transform="uppercase">
      Pick up
    </TextItem>
  </StyledContainer>
);

export default SearchTypes;
