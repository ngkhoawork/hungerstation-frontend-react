import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { clearUndefs } from 'utils/helpers';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import { selectCheckoutState } from 'modules/checkout/selectors';
import { createOrder } from 'modules/checkout/actions';
import { selectPrimaryAddress } from 'modules/address/selectors';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import { getLocation } from 'modules/location/actions';
import { selectDistrict, selectCity } from 'modules/location/selectors';
import Cart from 'components/Cart';

class CartContainer extends React.Component {
  componentDidMount() {
    const { params } = this.props;
    this.props.getLocation({ city: params.city, district: params.district });
  }

  handleOrderCreate = () => {
    const {
      params,
      district,
      primaryAddress,
      // orderAmount,
      purchases,
      checkoutState,
    } = this.props;
    const { coupon, note, selectedDeliveryOption } = checkoutState;
    const payload = clearUndefs({
      branchId: parseInt(params.branchId, 10),
      districtId: parseInt(district.get('id'), 10),
      addressId: parseInt(primaryAddress.id, 10),
      deliveryOptionId: parseInt(selectedDeliveryOption.key, 10),
      coupon: coupon && coupon.isValid ? coupon.id : undefined,
      note: note || undefined,
      orderItems: purchases.map(item => ({
        menuitem_id: parseInt(item.product.id, 10),
        count: item.quantity,
        orderitem_link_modifiers: item.additions.map(({ id }) =>
          parseInt(id, 10),
        ),
        // total_cost: Float
      })),
    });

    this.props.createOrder(payload);
  };

  render() {
    const {
      city,
      district,
      checkoutState: { selectedDeliveryOption: delivery },
      restaurant,
      params,
      discount,
      ...props
    } = this.props;

    return (
      <Cart
        {...props}
        branch={restaurant}
        discount={discount}
        deliveryFee={delivery && delivery.price}
        city={city && city.get('name')}
        district={district && district.get('name')}
        isOrderDetail
        onCartSubmit={this.isCheckout ? this.handleOrderCreate : undefined}
      />
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      restaurant: selectRestaurantState(state).restaurant,
      // purchases: selectCartPurchases(state),
      // orderAmount: selectOrderAmount(state),
      checkoutState: selectCheckoutState(state),
      primaryAddress: selectPrimaryAddress(state),
      city: selectCity(state),
      district: selectDistrict(state),
    }),
    {
      getLocation,
      showModal,
      hideModal,
      createOrder,
    },
  ),
)(CartContainer);
