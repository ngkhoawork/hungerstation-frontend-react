import React, { Component } from 'react';
import { restaurantsPropTypes } from 'props/restaurants';

import StyledRestaurantList from './StyledRestaurantList';
import RestaurantCard from './RestaurantCard';
import ToolsPanel from './ToolsPanel';
import StyledList from './StyledList';
import LoadMore from './LoadMore';
import ScrollUp from './ScrollUp';

export default class RestaurantsList extends Component {
  static propTypes = {
    restaurants: restaurantsPropTypes,
  };

  constructor(props) {
    super(props);
    this.restaurantsListRef = React.createRef();
  }

  handleScrollUp = () => {
    this.restaurantsListRef.current.scrollIntoView();
  };

  render() {
    const { restaurants } = this.props;
    return (
      <StyledRestaurantList innerRef={this.restaurantsListRef}>
        <ToolsPanel />
        <StyledList>
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </StyledList>
        <ScrollUp onClick={this.handleScrollUp} />
        <LoadMore />
      </StyledRestaurantList>
    );
  }
}
