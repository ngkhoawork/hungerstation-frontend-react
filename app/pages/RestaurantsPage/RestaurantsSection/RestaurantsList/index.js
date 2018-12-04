import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { restaurantsPropTypes } from 'propTypes/restaurants';
import { mediaLess, flex, sideMargin, sidePosition } from 'utils/css/styles';
import { gold } from 'utils/css/colors';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import Loader from 'components/Loader';
import StyledRestaurantList from './StyledRestaurantList';
import RestaurantCard from './RestaurantCard';
import ToolsPanel from './ToolsPanel';
import StyledList from './StyledList';
import LoadMore from './LoadMore';
import NotFound from './NotFound';

const ActionButtonsWrapper = styled.div`
  ${flex({ justify: 'center' })};
  position: relative;
  width: 100%;
  height: 40px;

  ${mediaLess(500)`
    ${flex({ justify: 'flex-start' }, false)};
  `};
`;

const ScrollToListTopWrapper = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  position: absolute;
  bottom: 5px;
  ${sidePosition('end', '0px')};
  ${sideMargin('end', '-3%')};
  ${mediaLess(1400)`
    ${sideMargin('end', '0px')};
  `};

  transform: rotate(270deg);
`;

const PAGINATION_STEP = 18;
const SCROLL_STEP = 400;

export default class RestaurantsList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    restaurants: restaurantsPropTypes,
    handleScrollToTop: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      paginationStage: 1,
    };
  }

  componentDidMount() {
    setTimeout(() => window.scrollTo(0, 0), 0);
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

  renderContent = () => {
    const { restaurants, isLoading } = this.props;
    const { paginationStage } = this.state;

    if (isLoading) return <Loader />;

    if (isLoading === false && !restaurants.length) return <NotFound />;

    if (restaurants.length) {
      return (
        <StyledList>
          {restaurants
            .slice(0, paginationStage * PAGINATION_STEP)
            .map(restaurant => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
        </StyledList>
      );
    }

    return null;
  };

  render() {
    const { restaurants, handleScrollToTop } = this.props;

    return (
      <StyledRestaurantList>
        <ToolsPanel hasData={restaurants.length > 0} />
        {this.renderContent()}

        <ActionButtonsWrapper>
          {restaurants.length !== 0 && (
            <ScrollToListTopWrapper onClick={handleScrollToTop}>
              <CircledItem width={28} color={gold} withShadow>
                <Icon name="arrow-right" size={12} />
              </CircledItem>
            </ScrollToListTopWrapper>
          )}

          {this.showLoadMoreButton && (
            <LoadMore showMore={this.showMoreItems} />
          )}
        </ActionButtonsWrapper>
      </StyledRestaurantList>
    );
  }
}
