import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Cart from 'components/Cart';
import { selectRestaurantName } from 'modules/restaurant/selectors';
import { removeFromCart } from './actions';
import {
  selectCartPurchases,
  selectOrderAmount,
  selectDiscount,
} from './selectors';

const CartContainer = ({ location, ...props }) => {
  const isCheckout = location.pathname.split('/').pop() === 'checkout';

  return <Cart {...props} isCheckout={isCheckout} />;
};

export default compose(
  withRouter,
  connect(
    state => ({
      from: selectRestaurantName(state),
      purchases: selectCartPurchases(state),
      orderAmount: selectOrderAmount(state),
      discount: selectDiscount(state),
    }),
    { removeFromCart },
  ),
)(CartContainer);
