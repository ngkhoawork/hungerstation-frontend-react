import React from 'react';
import { restaurantsPropTypes } from 'props/restaurants';

import StyledRestaurantList from './StyledRestaurantList';
import RestaurantCard from './RestaurantCard';
import ToolsPanel from './ToolsPanel';

const RestaurantsList = ({ restaurants }) => (
  <StyledRestaurantList>
    <ToolsPanel />
    <div>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
  </StyledRestaurantList>
);

RestaurantsList.propTypes = {
  restaurants: restaurantsPropTypes,
};

export default RestaurantsList;
