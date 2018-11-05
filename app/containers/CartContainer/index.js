import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { getStorageItem } from 'utils/localStorage';
import Cart from 'components/Cart';
import { selectRestaurantName } from 'modules/restaurant/selectors';
import { getLocation } from 'modules/location/actions';
import { selectDistrict, selectCity } from 'modules/location/selectors';
import { removeFromCart, initCart } from './actions';
import {
  selectCartPurchases,
  selectOrderAmount,
  selectDiscount,
} from './selectors';

class CartContainer extends React.Component {
  componentDidMount() {
    const { location, params } = this.props;
    this.isCheckout = location.pathname.split('/').pop() === 'checkout';

    this.props.getLocation({ city: params.city, district: params.district });

    if (getStorageItem('branchId') === params.branchId) this.props.initCart();
  }

  render() {
    const { city, district, params, ...props } = this.props;

    return (
      <Cart
        {...props}
        city={city && city.get('name')}
        district={district && district.get('name')}
        isCheckout={this.isCheckout}
      />
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      from: selectRestaurantName(state),
      purchases: selectCartPurchases(state),
      orderAmount: selectOrderAmount(state),
      discount: selectDiscount(state),
      city: selectCity(state),
      district: selectDistrict(state),
    }),
    { removeFromCart, initCart, getLocation },
  ),
)(CartContainer);
