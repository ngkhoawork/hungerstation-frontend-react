import React from 'react';
import { jade } from 'utils/css/colors';

import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import StyledHeader from './StyledHeader';
import Filter from './Filter';
import LocationInput from './LocationInput';
import StyledTitle from './StyledTitle';

const RestaurantsHeader = () => (
  <StyledHeader>
    <StyledTitle>
      <Paragraph size={30} margin="0 5px 0 0">
        We found
      </Paragraph>
      <CircledItem width={28} color={jade}>
        <Paragraph color="white">19</Paragraph>
      </CircledItem>
      <Paragraph size={30} margin="0 0 0 5px">
        Restaurants at
      </Paragraph>
    </StyledTitle>
    <LocationInput />
    <Filter />
  </StyledHeader>
);

export default RestaurantsHeader;
