import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectPrimaryAddress } from 'modules/address/selectors';
import { selectCheckoutState } from 'modules/checkout/selectors';
import {
  // fetchCreditCards,
  selectPaymentOption,
  setCoupon,
  removeCoupon,
} from 'modules/checkout/actions';
import PaymentOptions from 'components/PaymentOptions';

class PaymentOptionsContainer extends React.Component {
  componentDidMount() {
    // this.props.fetchCreditCards();
  }

  handlePaymentSelect = selectedPaymentOption => {
    const { checkoutState } = this.props;
    if (selectedPaymentOption.id !== checkoutState.selectedPaymentOption.id) {
      this.props.selectPaymentOption(selectedPaymentOption);
      this.props.onOrderChange();
    }
  };

  handleSetCoupon = value => {
    const coupon = { value, isDisabled: !this.props.primaryAddress };
    this.props.setCoupon(coupon);
    // this.props.onOrderChange();
  };

  render() {
    const { checkoutState } = this.props;

    return (
      <PaymentOptions
        selectedOption={checkoutState.selectedPaymentOption}
        cards={checkoutState.cards}
        onOptionSelect={this.handlePaymentSelect}
        onCouponSubmit={this.handleSetCoupon}
        onCouponDelete={this.props.removeCoupon}
        isCouponLoading={checkoutState.isCouponLoading}
        coupon={checkoutState.coupon}
        discount={checkoutState.discount}
      />
    );
  }
}

PaymentOptionsContainer.propTypes = {
  primaryAddress: PropTypes.object,
  checkoutState: PropTypes.object.isRequired,
  selectPaymentOption: PropTypes.func.isRequired,
  setCoupon: PropTypes.func.isRequired,
  removeCoupon: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
  // fetchCreditCards: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    checkoutState: selectCheckoutState(state),
    primaryAddress: selectPrimaryAddress(state),
  }),
  { selectPaymentOption, setCoupon, removeCoupon },
  // { selectPaymentOption, setCoupon, removeCoupon, fetchCreditCards },
)(PaymentOptionsContainer);
