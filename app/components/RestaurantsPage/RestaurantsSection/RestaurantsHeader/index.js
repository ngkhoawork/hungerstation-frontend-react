import React from 'react';

import Paragraph from 'components/Paragraph';
import Indicator from '../../Indicator';
import StyledHeader from './StyledHeader';
import Filter from './Filter';
import LocationInput from './LocationInput';
import StyledTitle from './StyledTitle';

const RestaurantsHeader = () => (
  <StyledHeader>
    <StyledTitle>
      <Paragraph size={30}>We found</Paragraph>
      <Indicator value={19} size={28} />
      <Paragraph size={30}>Restaurants at</Paragraph>
    </StyledTitle>
    <LocationInput />
    <Filter />
  </StyledHeader>
);

export default RestaurantsHeader;
