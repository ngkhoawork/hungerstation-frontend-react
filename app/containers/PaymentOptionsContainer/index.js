import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCheckoutState } from 'modules/checkout/selectors';
import {
  fetchCreditCards,
  validateCoupon,
  selectPaymentOption,
  removeCoupon,
} from 'modules/checkout/actions';
import PaymentOptions from 'components/PaymentOptions';

class PaymentOptionsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCreditCards();
  }

  render() {
    const { checkoutState } = this.props;

    return (
      <PaymentOptions
        selectedOption={checkoutState.selectedPaymentOption}
        cards={checkoutState.cards}
        onOptionSelect={this.props.selectPaymentOption}
        onCouponSubmit={this.props.validateCoupon}
        onCouponDelete={this.props.removeCoupon}
        coupon={checkoutState.coupon}
      />
    );
  }
}

PaymentOptionsContainer.propTypes = {
  checkoutState: PropTypes.object.isRequired,
  selectPaymentOption: PropTypes.func.isRequired,
  removeCoupon: PropTypes.func.isRequired,
  validateCoupon: PropTypes.func.isRequired,
  fetchCreditCards: PropTypes.func.isRequired,
};

export default connect(
  state => ({ checkoutState: selectCheckoutState(state) }),
  { selectPaymentOption, validateCoupon, removeCoupon, fetchCreditCards },
)(PaymentOptionsContainer);
