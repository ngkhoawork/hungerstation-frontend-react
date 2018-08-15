import React from 'react';

import StyledContainer from '../StyledContainer';
import TextItem from '../TextItem';
import ActiveBorder from './ActiveBorder';
import ItemContainer from './ItemContainer';

const SearchTypes = () => {
  const items = [
    { id: 'delivery', name: 'Delivery' },
    { id: 'pickup', name: 'Pick up' },
  ];
  return (
    <StyledContainer>
      {items.map(item => (
        <ItemContainer key={item.id}>
          <TextItem size={15} weight={500} transform="uppercase">
            {item.name}
          </TextItem>
          {item.id === 'delivery' && <ActiveBorder />}
        </ItemContainer>
      ))}
    </StyledContainer>
  );
};

export default SearchTypes;
