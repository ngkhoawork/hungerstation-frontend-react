import React, { Component } from 'react';
import { restaurantsPropTypes } from 'propTypes/restaurants';
import { gold } from 'utils/css/colors';

import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import StyledRestaurantList from './StyledRestaurantList';
import RestaurantCard from './RestaurantCard';
import ToolsPanel from './ToolsPanel';
import StyledList from './StyledList';
import LoadMore from './LoadMore';
import ScrollToListTopWrapper from './ButtonWrapper';

const PAGINATION_STEP = 9;
const SCROLL_STEP = 400;

export default class RestaurantsList extends Component {
  static propTypes = {
    restaurants: restaurantsPropTypes,
  };

  constructor(props) {
    super(props);
    this.restaurantsListRef = React.createRef();
    this.state = {
      paginationStage: 1,
    };
  }

  handleScrollUp = () =>
    this.restaurantsListRef.current.scrollIntoView({ behavior: 'smooth' });

  showMoreItems = () => {
    this.setState(prevState => ({
      paginationStage: prevState.paginationStage + 1,
    }));
    window.scroll({ top: window.scrollY + SCROLL_STEP, behavior: 'smooth' });
  };

  get showLoadMoreButton() {
    const { restaurants } = this.props;
    const { paginationStage } = this.state;
    return paginationStage * PAGINATION_STEP <= restaurants.length;
  }

  render() {
    const { restaurants } = this.props;
    const { paginationStage } = this.state;
    return (
      <StyledRestaurantList innerRef={this.restaurantsListRef}>
        <ToolsPanel />

        <StyledList>
          {restaurants
            .slice(0, paginationStage * PAGINATION_STEP)
            .map(restaurant => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
        </StyledList>

        <ScrollToListTopWrapper onClick={this.handleScrollUp}>
          <CircledItem width={28} color={gold}>
            <Icon name="arrow-right" size={12} />
          </CircledItem>
        </ScrollToListTopWrapper>

        {this.showLoadMoreButton && <LoadMore showMore={this.showMoreItems} />}
      </StyledRestaurantList>
    );
  }
}
