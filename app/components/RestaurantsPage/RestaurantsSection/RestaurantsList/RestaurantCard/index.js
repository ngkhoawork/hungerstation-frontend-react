import React from 'react';
import { restaurantPropTypes } from 'prop-types';

import BurgerKing from 'images/burgerking.png';
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
    <UpperPart brandSrc={BurgerKing} />
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
