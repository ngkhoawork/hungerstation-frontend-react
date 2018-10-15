import React from 'react';
import PropTypes from 'prop-types';
import { jade } from 'utils/css/colors';

import Paragraph from 'components/Paragraph';
import SquaredItem from 'components/SquaredItem';
import StyledHeader from './StyledHeader';
import LocationInput from './LocationInput';
import StyledTitle from './StyledTitle';

const RestaurantsHeader = ({ itemsFound }) => (
  <StyledHeader>
    <StyledTitle>
      <SquaredItem width={45} height={35} color={jade}>
        <Paragraph color="white" size={22}>
          {itemsFound}
        </Paragraph>
      </SquaredItem>
      <Paragraph size={30} margin="0 0 0 11px">
        Restaurants found at
      </Paragraph>
    </StyledTitle>
    <LocationInput />
  </StyledHeader>
);

RestaurantsHeader.propTypes = {
  itemsFound: PropTypes.number.isRequired,
};

export default RestaurantsHeader;
