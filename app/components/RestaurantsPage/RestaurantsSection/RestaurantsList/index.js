import React, { Component } from 'react';
import { restaurantsPropTypes } from 'props/restaurants';
import { gold } from 'utils/colors';

import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import StyledRestaurantList from './StyledRestaurantList';
import RestaurantCard from './RestaurantCard';
import ToolsPanel from './ToolsPanel';
import StyledList from './StyledList';
import LoadMore from './LoadMore';
import ButtonWrapper from './ButtonWrapper';

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
        <ButtonWrapper onClick={this.handleScrollUp}>
          <CircledItem width={28} color={gold}>
            <Icon name="arrow-right" size={12} />
          </CircledItem>
        </ButtonWrapper>
        <LoadMore />
      </StyledRestaurantList>
    );
  }
}
