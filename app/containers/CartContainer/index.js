import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { getStorageItem } from 'utils/localStorage';
import Cart from 'components/Cart';
import { selectCheckoutState } from 'modules/checkout/selectors';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import { getLocation } from 'modules/location/actions';
import { selectDistrict, selectCity } from 'modules/location/selectors';
import { removeFromCart, initCart } from './actions';
import { selectCartPurchases, selectOrderAmount } from './selectors';

class CartContainer extends React.Component {
  componentDidMount() {
    const { location, params } = this.props;
    this.isCheckout = location.pathname.split('/').pop() === 'checkout';

    this.props.getLocation({ city: params.city, district: params.district });

    if (getStorageItem('branchId') === params.branchId) this.props.initCart();
  }

  render() {
    const {
      city,
      district,
      checkoutState: { selectedDeliveryOption: delivery, coupon },
      restaurant,
      params,
      ...props
    } = this.props;

    return (
      <Cart
        {...props}
        from={restaurant.name}
        minAmount={
          restaurant.deliveryConditions &&
          restaurant.deliveryConditions.minimum_order
        }
        discount={coupon && coupon.isValid ? coupon.value : 0}
        deliveryFee={delivery && delivery.price}
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
      restaurant: selectRestaurantState(state).restaurant,
      purchases: selectCartPurchases(state),
      orderAmount: selectOrderAmount(state),
      checkoutState: selectCheckoutState(state),
      city: selectCity(state),
      district: selectDistrict(state),
    }),
    { removeFromCart, initCart, getLocation },
  ),
)(CartContainer);
