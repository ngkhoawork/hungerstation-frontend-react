import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectAddresses,
  selectPrimaryAddress,
} from 'modules/address/selectors';
import { setPrimaryAddress } from 'modules/address/actions';
import Addresses from 'components/Addresses';
import AddAddressContainer from 'containers/AddAddressContainer';
import { showModal } from 'containers/ModalContainer/actions';

class AddressesContainer extends React.Component {
  handleAddAddress = address => {
    const AddAddressContainerHOC = () => (
      <AddAddressContainer address={address} />
    );

    this.props.showModal(AddAddressContainerHOC);
  };

  handleAddressSelect = address => this.props.setPrimaryAddress(address);

  render() {
    const { addresses, primaryAddress } = this.props;

    return (
      <Addresses
        selectedAddress={primaryAddress}
        recentAddresses={addresses.filter(addr => addr !== primaryAddress)}
        onAddClick={this.handleAddAddress}
        onEditClick={this.handleAddAddress}
        onSelectToggle={this.handleAddressSelect}
      />
    );
  }
}

AddressesContainer.propTypes = {
  primaryAddress: PropTypes.object,
  addresses: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
  setPrimaryAddress: PropTypes.func.isRequired,
};

export default connect(
  createStructuredSelector({
    addresses: selectAddresses,
    primaryAddress: selectPrimaryAddress,
  }),
  { showModal, setPrimaryAddress },
)(AddressesContainer);
