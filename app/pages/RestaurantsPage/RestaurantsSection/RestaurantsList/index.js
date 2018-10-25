import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { restaurantsPropTypes } from 'propTypes/restaurants';
import { gold } from 'utils/css/colors';

import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import StyledRestaurantList from './StyledRestaurantList';
import RestaurantCard from './RestaurantCard';
import ToolsPanel from './ToolsPanel';
import StyledList from './StyledList';
import LoadMore from './LoadMore';
import NotFound from './NotFound';
import ScrollToListTopWrapper from './ButtonWrapper';

const PAGINATION_STEP = 9;
const SCROLL_STEP = 400;

export default class RestaurantsList extends Component {
  static propTypes = {
    restaurants: restaurantsPropTypes,
    handleScrollToTop: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      paginationStage: 1,
    };
  }

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
    const { restaurants, handleScrollToTop } = this.props;
    const { paginationStage } = this.state;

    return (
      <StyledRestaurantList>
        <ToolsPanel />
        {restaurants.length > 0 ? (
          <StyledList>
            {restaurants
              .slice(0, paginationStage * PAGINATION_STEP)
              .map(restaurant => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
          </StyledList>
        ) : (
          <NotFound />
        )}
        {restaurants.length !== 0 && (
          <ScrollToListTopWrapper onClick={handleScrollToTop}>
            <CircledItem width={28} color={gold}>
              <Icon name="arrow-right" size={12} />
            </CircledItem>
          </ScrollToListTopWrapper>
        )}

        {this.showLoadMoreButton && <LoadMore showMore={this.showMoreItems} />}
      </StyledRestaurantList>
    );
  }
}
