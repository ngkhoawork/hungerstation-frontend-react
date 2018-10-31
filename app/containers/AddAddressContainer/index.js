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
  selectDistrictId,
} from 'modules/location/selectors';
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
    const { district, saveAddress, hideModal } = this.props;
    saveAddress({ ...address, district });
    hideModal();
  };

  render() {
    const { latLng, isUserLocated, user, address, addresses } = this.props;
    const disabledTypes = addresses
      .map(({ specific_type }) => specific_type)
      .filter(type => type !== otherAddressType);

    return (
      <AddAddress
        phone={user.mobile}
        address={address}
        disabledTypes={disabledTypes}
        location={latLng}
        isUserLocated={isUserLocated}
        onLocateMeClick={this.props.getCurrentLocationAction}
        onSubmit={this.handleAddAddressSubmit}
      />
    );
  }
}

AddAddressContainer.propTypes = {
  district: PropTypes.string,
  address: PropTypes.object,
  addresses: PropTypes.array,
  user: PropTypes.object.isRequired,
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
      district: selectDistrictId,
      addresses: selectAddresses,
      user: makeSelectCurrentUser,
      isUserLocated: selectIsSettlementLoaded,
      latLng: selectCoords,
    }),
    { getCurrentLocationAction, saveAddress, hideModal },
  ),
)(AddAddressContainer);
