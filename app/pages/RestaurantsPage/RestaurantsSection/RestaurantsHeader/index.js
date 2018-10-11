import React from 'react';
import { jade } from 'utils/css/colors';

import Paragraph from 'components/Paragraph';
import SquaredItem from 'components/SquaredItem';
import StyledHeader from './StyledHeader';
import LocationInput from './LocationInput';
import StyledTitle from './StyledTitle';

const RestaurantsHeader = () => (
  <StyledHeader>
    <StyledTitle>
      <SquaredItem width={45} height={35} color={jade}>
        <Paragraph color="white" size={22}>
          121
        </Paragraph>
      </SquaredItem>
      <Paragraph size={30} margin="0 0 0 11px">
        Restaurants found at
      </Paragraph>
    </StyledTitle>
    <LocationInput />
  </StyledHeader>
);

export default RestaurantsHeader;
