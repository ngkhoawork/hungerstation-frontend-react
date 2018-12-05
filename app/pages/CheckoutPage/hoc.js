import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDeepProp, clearUndefs } from 'utils/helpers';
import { saveCurrentLocationAction } from 'modules/location/actions';
import { selectDistrict } from 'modules/location/selectors';
import { fetchAddresses } from 'modules/address/actions';
import { setBranchId, fetchRestaurant } from 'modules/restaurant/actions';
import {
  selectAddressState,
  selectPrimaryAddress,
  selectAddresses,
  selectAddressesLoading,
} from 'modules/address/selectors';
import { selectRestaurant } from 'modules/restaurant/selectors';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import {
  selectCartContainerState,
  selectCartPurchases,
  selectOrderAmount,
} from 'containers/CartContainer/selectors';
import { selectCheckoutState } from 'modules/checkout/selectors';
import {
  setNote,
  createOrder,
  validateOrder,
  clearCheckout,
} from 'modules/checkout/actions';
import InsufficientOrderAmount from 'containers/InsufficientOrderAmount';
import AddAddressContainer from 'containers/AddAddressContainer';
import CheckoutPage from './component';

class CheckoutPageHOC extends React.Component {
  componentDidMount() {
    const {
      restaurant,
      match: {
        params: { branchId, city, district },
      },
    } = this.props;

    this.checkPurchases();

    if (restaurant.latitude) {
      this.props.saveCurrentLocationAction({
        lat: restaurant.latitude,
        lng: restaurant.longitude,
      });
    }

    this.props.setBranchId(branchId);
    this.props.fetchAddresses(branchId);

    if (restaurant.id !== branchId) {
      this.props.fetchRestaurant({ branchId, city, district });
    }
  }

  componentDidUpdate(prevProps) {
    const { addresses, isLoadingAddresses, checkoutState } = this.props;

    this.checkPurchases(prevProps);

    if (
      prevProps.isLoadingAddresses &&
      !isLoadingAddresses &&
      !addresses.length
    ) {
      this.props.showModal(AddAddressContainer);
    }

    const { orderAmount, restaurant } = this.props;
    const minOrderAmount = getDeepProp(restaurant, [
      'delivery_conditions',
      0,
      'minimum_order',
    ]);

    if (orderAmount && orderAmount < minOrderAmount) {
      this.props.showModal(InsufficientOrderAmount);
    }

    // waiting for delivery options to refetch on address select and checking for change
    const { deliveryOptions, coupon } = checkoutState;
    const {
      deliveryOptions: prevDeliveryOptions,
      coupon: prevCoupon,
    } = prevProps.checkoutState;
    if (
      prevDeliveryOptions !== deliveryOptions ||
      (coupon || {}).value !== (prevCoupon || {}).value
    ) {
      this.handleOrderChange();
    }
  }

  componentWillUnmount() {
    this.props.hideModal();
    this.props.clearCheckout();
  }

  checkPurchases(prevProps) {
    const { match, history, cartState } = this.props;
    const { isInitialized, purchases } = cartState;

    if (
      (prevProps && prevProps.purchases.length && !purchases.length) ||
      (isInitialized && !purchases.length)
    ) {
      const { district, city } = match.params;
      history.push(`/restaurants/${city}/${district}`);
    }
  }

  generateOrderPayload = () => {
    const {
      match,
      district,
      primaryAddress,
      purchases,
      checkoutState,
    } = this.props;
    const { coupon, note, selectedDeliveryOption } = checkoutState;

    return clearUndefs({
      branchId: parseInt(match.params.branchId, 10),
      districtId: parseInt(district.get('id'), 10),
      addressId: primaryAddress && parseInt(primaryAddress.id, 10),
      deliveryOptionId:
        selectedDeliveryOption && parseInt(selectedDeliveryOption.key, 10),
      coupon: coupon ? coupon.value : undefined,
      note: note || undefined,
      orderItems: purchases.map(item => ({
        menuitem_id: parseInt(item.product.id, 10),
        count: item.quantity,
        orderitem_link_modifiers: item.additions.map(({ id }) =>
          parseInt(id, 10),
        ),
      })),
    });
  };

  handleOrderChange = () => {
    if (!this.props.primaryAddress) return;

    this.props.validateOrder(this.generateOrderPayload());
  };

  handleOrderCreate = () => {
    const { isLoading, orderErrors } = this.props.checkoutState;

    if (!isLoading && !getDeepProp(orderErrors, ['length'])) {
      this.props.createOrder(this.generateOrderPayload());
    }
  };

  render() {
    const { addressState, match, checkoutState } = this.props;

    return (
      <CheckoutPage
        params={match.params}
        isLoading={!addressState.isAddressesInitialized}
        deliveryOptions={checkoutState.deliveryOptions}
        note={checkoutState.note}
        onNoteChange={this.props.setNote}
        onOrderCreate={this.handleOrderCreate}
        onOrderChange={this.handleOrderChange}
      />
    );
  }
}

CheckoutPageHOC.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
  orderAmount: PropTypes.number.isRequired,
  purchases: PropTypes.array.isRequired,
  restaurant: PropTypes.object.isRequired,
  checkoutState: PropTypes.object.isRequired,
  addressState: PropTypes.object.isRequired,
  district: PropTypes.object,
  primaryAddress: PropTypes.object,
  addresses: PropTypes.array,
  isLoadingAddresses: PropTypes.bool,
  fetchAddresses: PropTypes.func.isRequired,
  fetchRestaurant: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  saveCurrentLocationAction: PropTypes.func.isRequired,
  setBranchId: PropTypes.func.isRequired,
  setNote: PropTypes.func.isRequired,
  createOrder: PropTypes.func.isRequired,
  validateOrder: PropTypes.func.isRequired,
  clearCheckout: PropTypes.func.isRequired,
};

export default connect(
  createStructuredSelector({
    restaurant: selectRestaurant,
    orderAmount: selectOrderAmount,
    cartState: selectCartContainerState,
    purchases: selectCartPurchases,
    addresses: selectAddresses,
    addressState: selectAddressState,
    isLoadingAddresses: selectAddressesLoading,
    checkoutState: selectCheckoutState,
    district: selectDistrict,
    primaryAddress: selectPrimaryAddress,
  }),
  {
    showModal,
    hideModal,
    fetchRestaurant,
    fetchAddresses,
    saveCurrentLocationAction,
    setBranchId,
    setNote,
    createOrder,
    validateOrder,
    clearCheckout,
  },
)(CheckoutPageHOC);
