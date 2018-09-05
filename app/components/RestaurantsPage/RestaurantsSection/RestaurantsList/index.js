import React from 'react';
import { restaurantsPropTypes } from 'props/restaurants';

import StyledRestaurantList from './StyledRestaurantList';
import RestaurantCard from './RestaurantCard';
import ToolsPanel from './ToolsPanel';
import StyledList from './StyledList';

const RestaurantsList = ({ restaurants }) => (
  <StyledRestaurantList>
    <ToolsPanel />
    <StyledList>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </StyledList>
  </StyledRestaurantList>
);

RestaurantsList.propTypes = {
  restaurants: restaurantsPropTypes,
};

export default RestaurantsList;
