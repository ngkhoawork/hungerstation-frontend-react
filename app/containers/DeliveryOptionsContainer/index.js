import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDeepProp } from 'utils/helpers';
import { selectCheckoutState } from 'modules/checkout/selectors';
import { selectPrimaryAddress } from 'modules/address/selectors';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import {
  selectDeliveryOption,
  fetchDeliveryOptions,
} from 'modules/checkout/actions';
import DeliveryOptions from 'components/DeliveryOptions';

let isDeliveryOptionsFetched = false;

class DeliveryOptionsContainer extends React.Component {
  componentDidMount() {
    this.handleFetchDeliveryOptions();
  }

  componentDidUpdate(prevProps) {
    this.handleFetchDeliveryOptions(prevProps);
  }

  handleFetchDeliveryOptions = prevProps => {
    const { restaurantState, address } = this.props;
    const branchId = restaurantState.restaurant.id || restaurantState.branchId;
    const prevAddressId = getDeepProp(prevProps, ['address', 'id']);

    if (
      (branchId && address && !isDeliveryOptionsFetched) ||
      (prevAddressId && prevAddressId !== address.id)
    ) {
      isDeliveryOptionsFetched = true;
      this.props.fetchDeliveryOptions({
        branchId,
        lat: address.latitude,
        lng: address.longitude,
      });
    }
  };

  handleSelectDeliveryOption = selectedDeliveryOption => {
    this.props.selectDeliveryOption(selectedDeliveryOption);
    this.props.onOrderChange();
  };

  render() {
    const { checkoutState } = this.props;
    const { deliveryOptions, selectedDeliveryOption } = checkoutState;

    if ((deliveryOptions || []).length < 2) return null;

    return (
      <DeliveryOptions
        selectedOption={selectedDeliveryOption}
        options={deliveryOptions}
        onSelect={this.handleSelectDeliveryOption}
      />
    );
  }
}

DeliveryOptionsContainer.propTypes = {
  restaurantState: PropTypes.object.isRequired,
  address: PropTypes.object,
  checkoutState: PropTypes.object.isRequired,
  selectDeliveryOption: PropTypes.func.isRequired,
  fetchDeliveryOptions: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    checkoutState: selectCheckoutState(state),
    address: selectPrimaryAddress(state),
    restaurantState: selectRestaurantState(state),
  }),
  { selectDeliveryOption, fetchDeliveryOptions },
)(DeliveryOptionsContainer);
