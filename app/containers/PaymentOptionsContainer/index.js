import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCheckoutState } from 'modules/checkout/selectors';
import { selectPaymentOption, setCoupon } from 'modules/checkout/actions';
import PaymentOptions from 'components/PaymentOptions';

const PaymentOptionsContainer = ({ checkoutState, ...props }) => (
  <PaymentOptions
    selectedOption={checkoutState.selectedPaymentOption}
    cards={
      checkoutState.cards || [
        { id: '1', name: 'John Doe', number: '1234' },
        { id: '2', name: 'John Doe', number: '5678' },
      ]
    }
    onOptionSelect={props.selectPaymentOption}
    onCouponSubmit={props.setCoupon}
    onCouponDelete={props.setCoupon}
    coupon={checkoutState.coupon}
  />
);

PaymentOptionsContainer.propTypes = {
  checkoutState: PropTypes.object.isRequired,
  selectPaymentOption: PropTypes.func.isRequired,
  setCoupon: PropTypes.func.isRequired,
};

export default connect(
  state => ({ checkoutState: selectCheckoutState(state) }),
  { selectPaymentOption, setCoupon },
)(PaymentOptionsContainer);
