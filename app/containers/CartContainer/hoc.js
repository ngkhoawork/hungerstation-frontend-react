import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectors/injectReducer';
import Cart from 'components/Cart';
import { removeFromCart } from './actions';
import { selectCartPurchases, selectOrderAmount } from './selectors';
import reducer from './reducer';

const CartContainer = props => <Cart {...props} />;

export default compose(
  injectReducer({ key: 'CartContainer', reducer }),
  connect(
    state => ({
      purchases: selectCartPurchases(state),
      orderAmount: selectOrderAmount(state),
    }),
    { removeFromCart },
  ),
)(CartContainer);
