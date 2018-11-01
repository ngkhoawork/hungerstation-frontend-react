import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCheckoutState } from 'modules/checkout/selectors';
import { selectDeliveryOption } from 'modules/checkout/actions';
import DeliveryOptions from 'components/DeliveryOptions';

const DeliveryOptionsContainer = ({ checkoutState, ...props }) => (
  <DeliveryOptions
    selectedOption={checkoutState.selectedDeliveryOption}
    options={
      checkoutState.deliveryOptions || [
        { id: '1', name: 'Hungerstation Delivery', price: 21 },
        { id: '2', name: 'Restaurant Delivery', price: 11, disabled: true },
      ]
    }
    onSelect={props.selectDeliveryOption}
  />
);

DeliveryOptionsContainer.propTypes = {
  checkoutState: PropTypes.object.isRequired,
  selectDeliveryOption: PropTypes.func.isRequired,
};

export default connect(
  state => ({ checkoutState: selectCheckoutState(state) }),
  { selectDeliveryOption },
)(DeliveryOptionsContainer);
