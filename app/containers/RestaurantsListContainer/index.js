/**
 *
 * RestaurantsListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';

import RestaurantsList from 'pages/RestaurantsPage/RestaurantsSection/RestaurantsList';

import injectSaga from 'utils/injectors/injectSaga';
import injectReducer from 'utils/injectors/injectReducer';
import { restaurantsPropTypes } from 'props/restaurants';
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

export const RestaurantsListContainer = ({ restaurants }) => (
  <RestaurantsList restaurants={restaurants} />
);

RestaurantsListContainer.propTypes = {
  restaurants: restaurantsPropTypes,
};

export default enhanced(RestaurantsListContainer);
