import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { saveCurrentLocationAction } from 'modules/location/actions';
import { fetchAddresses } from 'modules/address/actions';
import {
  selectAddresses,
  selectAddressesLoading,
} from 'modules/address/selectors';
import { selectRestaurantCoords } from 'modules/restaurant/selectors';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import AddAddressContainer from 'containers/AddAddressContainer';
import IneligibleAddress from 'components/IneligibleAddress';
import CheckoutPage from './component';

class CheckoutPageHOC extends React.Component {
  componentDidMount() {
    const { restaurantCoords } = this.props;

    if (restaurantCoords.lat) {
      this.props.saveCurrentLocationAction(restaurantCoords);
    }

    this.props.fetchAddresses(this.props.match.params.branchId);
  }

  componentDidUpdate(prevProps) {
    const { addresses, isLoadingAddresses } = this.props;
    if (
      (!prevProps.addresses && addresses && !addresses.length) ||
      (prevProps.isLoadingAddresses && !isLoadingAddresses && !addresses.length)
    ) {
      // this.props.showModal(AddAddressContainer);
    }
  }

  // TODO: need to get ineligible addresses as well from the backend to be able
  // to take one of them for editing.
  handleIneligibleAddrEdit = () => {
    // this.props.hideModal();
    this.props.showModal(AddAddressContainer);
  };

  // TODO: not quite clear where should this go to...??
  handleIneligibleAddrSearch = () => {
    const { hideModal, history, match } = this.props;
    const { district, city } = match.params;
    hideModal();

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
    const { addresses } = this.props;

    return <CheckoutPage isLoading={addresses === undefined} />;
  }
}

CheckoutPageHOC.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  restaurantCoords: PropTypes.object,
  addresses: PropTypes.array,
  isLoadingAddresses: PropTypes.bool,
  fetchAddresses: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  saveCurrentLocationAction: PropTypes.func.isRequired,
};

export default connect(
  createStructuredSelector({
    addresses: selectAddresses,
    isLoadingAddresses: selectAddressesLoading,
    restaurantCoords: selectRestaurantCoords,
  }),
  { showModal, hideModal, fetchAddresses, saveCurrentLocationAction },
)(CheckoutPageHOC);
