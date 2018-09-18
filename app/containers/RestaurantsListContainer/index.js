/**
 *
 * RestaurantsListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RestaurantsList from 'components/RestaurantsPage/RestaurantsSection/RestaurantsList';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { restaurantsPropTypes } from 'props/restaurants';
import { makeSelectRestaurants } from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  restaurants: makeSelectRestaurants,
});

const mapDispatchToProps = {};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectReducer({ key: 'restaurantsListContainer', reducer })
@injectSaga({ key: 'restaurantsListContainer', saga })
/* eslint-disable react/prefer-stateless-function */
export default class RestaurantsListContainer extends React.Component {
  static propTypes = {
    restaurants: restaurantsPropTypes,
  };

  render() {
    const { restaurants } = this.props;
    return <RestaurantsList restaurants={restaurants} />;
  }
}
