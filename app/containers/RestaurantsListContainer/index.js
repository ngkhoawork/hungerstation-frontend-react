import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';

import RestaurantsList from 'pages/RestaurantsPage/RestaurantsSection/RestaurantsList';

import injectSaga from 'utils/injectors/injectSaga';
import injectReducer from 'utils/injectors/injectReducer';
import { restaurantsPropTypes } from 'propTypes/restaurants';
import { makeSelectRestaurants } from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  restaurants: makeSelectRestaurants,
});

const enhanced = compose(
  connect(mapStateToProps),
  injectReducer({ key: 'restaurantsListContainer', reducer }),
  injectSaga({ key: 'restaurantsListContainer', saga }),
);

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
