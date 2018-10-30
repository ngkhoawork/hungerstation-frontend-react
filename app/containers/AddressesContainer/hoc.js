import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectors/injectReducer';
import Addresses from 'components/Addresses';
import AddAddress from 'components/AddAddress';
// import { selectUserState } from 'modules/user/selectors';
import { showModal } from 'containers/ModalContainer/actions';
import { getCurrentLocationAction } from 'modules/location/actions';
import {
  selectIsSettlementLoaded,
  selectCoords,
} from 'modules/location/selectors';
import reducer from './reducer';

class AddressesContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.isSettlementLoaded);
    if (!this.props.isSettlementLoaded) {
      this.props.getCurrentLocationAction();
    }
  }

  handleAddAddress = () => {
    const { latLng, showModal } = this.props;
    const AddAddressHOC = () => (
      <AddAddress
        address={{}}
        location={latLng}
        isUserLocation
        onLocateMeClick={() => {}}
        onSubmit={() => {}}
      />
    );
    showModal(AddAddressHOC);
  };

  render() {
    const { showModal } = this.props;

    return (
      <Addresses
        showModal={showModal}
        onAddClick={this.handleAddAddress}
        onEditClick={() => {}}
        onSelectToggle={() => {}}
      />
    );
  }
}

AddressesContainer.propTypes = {
  showModal: PropTypes.func.isRequired,
  isSettlementLoaded: PropTypes.bool,
  latLng: PropTypes.object,
  getCurrentLocationAction: PropTypes.func.isRequired,
};

export default compose(
  injectReducer({ key: 'AddressesContainer', reducer }),
  connect(
    createStructuredSelector({
      isSettlementLoaded: selectIsSettlementLoaded,
      latLng: selectCoords,
    }),
    { showModal, getCurrentLocationAction },
  ),
)(AddressesContainer);
