import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectors/injectReducer';
import injectSaga from 'utils/injectors/injectSaga';
import Cart from 'components/Cart';
import { removeFromCart } from './actions';
import {
  selectCartPurchases,
  selectCartPurchasesQuantities,
  selectOrderAmount,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const CartContainer = props => <Cart {...props} />;

export default compose(
  injectReducer({ key: 'CartContainer', reducer }),
  injectSaga({ key: 'CartContainer', saga }),
  connect(
    state => ({
      purchases: selectCartPurchases(state),
      quantitiesByProductId: selectCartPurchasesQuantities(state),
      orderAmount: selectOrderAmount(state),
    }),
    { removeFromCart },
  ),
)(CartContainer);
