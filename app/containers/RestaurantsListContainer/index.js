import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RestaurantsList from 'pages/RestaurantsPage/RestaurantsSection/RestaurantsList';

import { selectVisibleRestaurants } from 'modules/restaurants/selectors';
import { restaurantsPropTypes } from 'propTypes/restaurants';

const enhanced = connect(state => ({
  restaurants: selectVisibleRestaurants(state),
}));

export const RestaurantsListContainer = ({
  restaurants,
  handleScrollToTop,
}) => (
  <RestaurantsList
    restaurants={restaurants}
    handleScrollToTop={handleScrollToTop}
  />
);

RestaurantsListContainer.propTypes = {
  restaurants: restaurantsPropTypes,
  handleScrollToTop: PropTypes.func.isRequired,
};

export default enhanced(RestaurantsListContainer);
