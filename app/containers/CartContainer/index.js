import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { getStorageItem } from 'utils/localStorage';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import { selectCheckoutState } from 'modules/checkout/selectors';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import { getLocation } from 'modules/location/actions';
import { selectDistrict, selectCity } from 'modules/location/selectors';
import MealOptions from 'components/MealOptions';
import Cart from 'components/Cart';
import { editCartItem, removeFromCart, initCart } from './actions';
import { selectCartPurchases, selectOrderAmount } from './selectors';

class CartContainer extends React.Component {
  componentDidMount() {
    const { location, params } = this.props;
    this.isCheckout = location.pathname.split('/').pop() === 'checkout';

    this.props.getLocation({ city: params.city, district: params.district });

    if (getStorageItem('branchId') === params.branchId) this.props.initCart();
  }

  handleEditClick = purchase => {
    const MealOptionsHOC = () => (
      <MealOptions purchase={purchase} onSubmit={this.handleEditSubmit} />
    );

    this.props.showModal(MealOptionsHOC);
  };

  handleEditSubmit = purchase => {
    this.props.editCartItem(purchase);
    this.props.hideModal();
  };

  render() {
    const {
      city,
      district,
      checkoutState: { selectedDeliveryOption: delivery, coupon },
      restaurant,
      params,
      onOrderCreate,
      ...props
    } = this.props;
    let discount = 0;

    if (coupon && coupon.isValid) {
      const { restaurants, cutbacks, discounts } = coupon;

      if (
        !restaurants.length ||
        restaurants.indexOf(restaurant.restaurant.id) > -1
      ) {
        if (cutbacks[0]) discount = cutbacks[0].cutback_amount;
        if (discounts[0]) discount = discounts[0].discount_amount;
      }
    }

    return (
      <Cart
        {...props}
        discount={discount}
        deliveryFee={delivery && delivery.price}
        city={city && city.get('name')}
        district={district && district.get('name')}
        branch={restaurant}
        isCheckout={this.isCheckout}
        onItemEditClick={this.handleEditClick}
        onCartSubmit={this.isCheckout ? onOrderCreate : undefined}
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
    {
      editCartItem,
      removeFromCart,
      initCart,
      getLocation,
      showModal,
      hideModal,
    },
  ),
)(CartContainer);
