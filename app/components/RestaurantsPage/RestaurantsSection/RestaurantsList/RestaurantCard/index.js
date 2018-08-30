import React from 'react';
import { restaurantPropTypes } from 'prop-types';

import StyledRestaurantCard from './StyledRestaurantCard';
import UpperPart from './UpperPart';
import BottomPart from './BottomPart';

const RestaurantCard = ({
  name,
  deliveryTimeMax,
  deliveryTimeMin,
  minOrder,
}) => (
  <StyledRestaurantCard>
    <UpperPart />
    <BottomPart
      name={name}
      deliveryTimeMax={deliveryTimeMax}
      deliveryTimeMin={deliveryTimeMin}
      minOrder={minOrder}
    />
  </StyledRestaurantCard>
);

RestaurantCard.propTypes = {
  ...restaurantPropTypes,
};

export default RestaurantCard;
