import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDeepProp } from 'utils/helpers';
import { saveCurrentLocationAction } from 'modules/location/actions';
import { fetchAddresses } from 'modules/address/actions';
import { setBranchId } from 'modules/restaurant/actions';
import {
  selectAddresses,
  selectAddressesLoading,
} from 'modules/address/selectors';
import { selectRestaurant } from 'modules/restaurant/selectors';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import {
  selectCartPurchases,
  selectOrderAmount,
} from 'containers/CartContainer/selectors';
import { selectCheckoutState } from 'modules/checkout/selectors';
import { setNote } from 'modules/checkout/actions';
import InsufficientOrderAmount from 'containers/InsufficientOrderAmount';
import AddAddressContainer from 'containers/AddAddressContainer';
import IneligibleAddress from 'components/IneligibleAddress';
import CheckoutPage from './component';

class CheckoutPageHOC extends React.Component {
  componentDidMount() {
    const { restaurant, match } = this.props;

    if (restaurant.latitude) {
      this.props.saveCurrentLocationAction({
        lat: restaurant.latitude,
        lng: restaurant.longitude,
      });
    }

    this.props.setBranchId(match.params.branchId);
    this.props.fetchAddresses(match.params.branchId);
  }

  componentDidUpdate(prevProps) {
    const { addresses, isLoadingAddresses } = this.props;

    if (
      (!prevProps.addresses && addresses && !addresses.length) ||
      (prevProps.isLoadingAddresses && !isLoadingAddresses && !addresses.length)
    ) {
      this.props.showModal(AddAddressContainer);
    }

    const { orderAmount, restaurant, purchases, history, match } = this.props;
    const minOrderAmount = getDeepProp(restaurant, [
      'delivery_conditions',
      0,
      'minimum_order',
    ]);

    if (prevProps.purchases.length && !purchases.length) {
      const { district, city } = match.params;

      history.push(`/restaurants/${city}/${district}`);
    } else if (orderAmount && orderAmount < minOrderAmount) {
      this.props.showModal(InsufficientOrderAmount);
    }
  }

  componentWillUnmount() {
    this.props.hideModal();
  }

  // TODO: need to get ineligible addresses as well from the backend to be able
  // to take one of them for editing.
  handleIneligibleAddrEdit = () => {
    // this.props.hideModal();
    this.props.showModal(AddAddressContainer);
  };

  // TODO: not quite clear where should this go to...??
  handleIneligibleAddrSearch = () => {
    const { history, match } = this.props;
    const { district, city } = match.params;
    this.props.hideModal();

    history.push(`/restaurants/${city}/${district}`);
  };

  handleIneligibleAddress = () => {
    const IneligibleAddressHOC = () => (
      <IneligibleAddress
        onEditClick={this.handleIneligibleAddrEdit}
        onSearchClick={this.handleIneligibleAddrSearch}
      />
    );
    this.props.showModal(IneligibleAddressHOC);
  };

  render() {
    const { addresses, match, checkoutState } = this.props;

    return (
      <CheckoutPage
        params={match.params}
        isLoading={addresses === undefined}
        deliveryOptions={checkoutState.deliveryOptions}
        note={checkoutState.note}
        onNoteChange={this.props.setNote}
      />
    );
  }
}

CheckoutPageHOC.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  orderAmount: PropTypes.number.isRequired,
  purchases: PropTypes.array.isRequired,
  restaurant: PropTypes.object.isRequired,
  checkoutState: PropTypes.object.isRequired,
  addresses: PropTypes.array,
  isLoadingAddresses: PropTypes.bool,
  fetchAddresses: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  saveCurrentLocationAction: PropTypes.func.isRequired,
  setBranchId: PropTypes.func.isRequired,
  setNote: PropTypes.func.isRequired,
};

export default connect(
  createStructuredSelector({
    restaurant: selectRestaurant,
    orderAmount: selectOrderAmount,
    purchases: selectCartPurchases,
    addresses: selectAddresses,
    isLoadingAddresses: selectAddressesLoading,
    checkoutState: selectCheckoutState,
  }),
  {
    showModal,
    hideModal,
    fetchAddresses,
    saveCurrentLocationAction,
    setBranchId,
    setNote,
  },
)(CheckoutPageHOC);
