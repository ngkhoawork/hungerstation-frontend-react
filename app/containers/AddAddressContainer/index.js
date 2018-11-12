import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import AddAddress from 'components/AddAddress';
import { saveAddress } from 'modules/address/actions';
import { otherAddressType } from 'modules/address/constants';
import { getCurrentLocationAction } from 'modules/location/actions';
import {
  selectIsSettlementLoaded,
  selectCoords,
} from 'modules/location/selectors';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import { makeSelectCurrentUser } from 'modules/auth/selectors';
import { selectAddresses } from 'modules/address/selectors';
import { hideModal } from 'containers/ModalContainer/actions';

class AddAddressContainer extends React.Component {
  componentDidMount() {
    const { isUserLocated, addresses } = this.props;

    if (!addresses.length && isUserLocated === undefined) {
      this.props.getCurrentLocationAction();
    }
  }

  handleAddAddressSubmit = address => {
    const { restaurantState } = this.props;
    const branchId = restaurantState.restaurant.id || restaurantState.branchId;
    this.props.saveAddress({ address, branchId });
    this.props.hideModal();
  };

  render() {
    const { latLng, user, address, addresses } = this.props;
    const disabledTypes = addresses
      .map(({ specific_type }) => specific_type)
      .filter(type => type !== otherAddressType);

    return (
      <AddAddress
        phone={user.mobile}
        address={address}
        disabledTypes={disabledTypes}
        location={latLng}
        hasNoEligible={!addresses.length}
        hasNoAddress={!addresses.length}
        onLocateMeClick={this.props.getCurrentLocationAction}
        onSubmit={this.handleAddAddressSubmit}
      />
    );
  }
}

AddAddressContainer.propTypes = {
  address: PropTypes.object,
  addresses: PropTypes.array,
  user: PropTypes.object.isRequired,
  restaurantState: PropTypes.object.isRequired,
  isUserLocated: PropTypes.bool,
  latLng: PropTypes.object.isRequired,
  getCurrentLocationAction: PropTypes.func.isRequired,
  saveAddress: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  connect(
    createStructuredSelector({
      addresses: selectAddresses,
      user: makeSelectCurrentUser,
      isUserLocated: selectIsSettlementLoaded,
      latLng: selectCoords,
      restaurantState: selectRestaurantState,
    }),
    { getCurrentLocationAction, saveAddress, hideModal },
  ),
)(AddAddressContainer);
