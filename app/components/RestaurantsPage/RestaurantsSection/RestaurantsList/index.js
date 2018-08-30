import React from 'react';
import { restaurantsPropTypes } from 'props/restaurants';

import StyledRestaurantList from './StyledRestaurantList';
import RestaurantCard from './RestaurantCard';

const RestaurantsList = ({ restaurants }) => (
  <StyledRestaurantList>
    {restaurants.map(restaurant => (
      <RestaurantCard key={restaurant.id} {...restaurant} />
    ))}
  </StyledRestaurantList>
);

RestaurantsList.propTypes = {
  restaurants: restaurantsPropTypes,
};

export default RestaurantsList;
