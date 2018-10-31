import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import injectReducer from 'utils/injectors/injectReducer';
import Cart from 'components/Cart';
import { selectRestaurantName } from 'modules/restaurant/selectors';
import { removeFromCart } from './actions';
import {
  selectCartPurchases,
  selectOrderAmount,
  selectDiscount,
} from './selectors';
import reducer from './reducer';

const CartContainer = ({ location, ...props }) => {
  const isCheckout = location.pathname.split('/').pop() === 'checkout';

  return <Cart {...props} isCheckout={isCheckout} />;
};

export default compose(
  injectReducer({ key: 'CartContainer', reducer }),
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
