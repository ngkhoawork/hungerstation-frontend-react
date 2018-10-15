import React from 'react';
import { restaurantPropTypes } from 'prop-types';

import BurgerKing from 'images/burgerking.png';
import StyledRestaurantCard from './StyledRestaurantCard';
import UpperPart from './UpperPart';
import BottomPart from './BottomPart';

const RestaurantCard = ({
  name,
  deliveryTime,
  minOrder,
  rateAverage,
  deliveryFee,
  status,
}) => (
  <StyledRestaurantCard>
    <UpperPart brandSrc={BurgerKing} rating={rateAverage} />
    <BottomPart
      name={name}
      deliveryTime={deliveryTime}
      deliveryFee={deliveryFee}
      minOrder={minOrder}
      status={status}
    />
  </StyledRestaurantCard>
);

RestaurantCard.propTypes = {
  ...restaurantPropTypes,
};

export default RestaurantCard;
