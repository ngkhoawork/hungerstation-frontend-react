import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
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

const CartContainer = props => {
  const isCheckout = window.location.pathname.split('/').pop() === 'checkout';

  return <Cart {...props} isCheckout={isCheckout} />;
};

export default compose(
  injectReducer({ key: 'CartContainer', reducer }),
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
