import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RestaurantsList from 'pages/RestaurantsPage/RestaurantsSection/RestaurantsList';

import {
  selectVisibleRestaurants,
  selectRestaurantsIsLoading,
} from 'modules/restaurants/selectors';

const enhanced = connect(state => ({
  restaurants: selectVisibleRestaurants(state),
  isLoading: selectRestaurantsIsLoading(state),
}));

export const RestaurantsListContainer = ({
  isLoading,
  restaurants,
  handleScrollToTop,
}) => (
  <RestaurantsList
    isLoading={isLoading}
    restaurants={restaurants}
    handleScrollToTop={handleScrollToTop}
  />
);

RestaurantsListContainer.propTypes = {
  isLoading: PropTypes.bool,
  restaurants: PropTypes.array,
  handleScrollToTop: PropTypes.func.isRequired,
};

export default enhanced(RestaurantsListContainer);
