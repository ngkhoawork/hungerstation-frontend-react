import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { getDeepProp } from 'utils/helpers';
import { selectCheckoutState } from 'modules/checkout/selectors';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import {
  selectCartPurchases,
  selectOrderAmount,
} from 'containers/CartContainer/selectors';
import ViewCartButton from 'components/ViewCartButton';

const ViewCartButtonHOC = ({
  location,
  orderAmount,
  purchases,
  restaurant,
  checkoutState: { selectedDeliveryOption },
}) => {
  const isCheckout = location.pathname.split('/').pop() === 'checkout';
  const minAmount = getDeepProp(restaurant, [
    'deliveryConditions',
    'minimum_order',
  ]);
  const totalQuantity = purchases.reduce(
    (sum, { quantity }) => sum + quantity,
    0,
  );
  const isDisabled =
    !purchases.length ||
    minAmount > orderAmount ||
    (isCheckout && !selectedDeliveryOption);

  return (
    <ViewCartButton
      isCheckout={isCheckout}
      isDisabled={isDisabled}
      quantity={totalQuantity}
      price={orderAmount}
    />
  );
};

ViewCartButtonHOC.propTypes = {
  location: PropTypes.object.isRequired,
  orderAmount: PropTypes.number.isRequired,
  purchases: PropTypes.array.isRequired,
  restaurant: PropTypes.object.isRequired,
  checkoutState: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  connect(state => ({
    restaurant: selectRestaurantState(state).restaurant,
    purchases: selectCartPurchases(state),
    orderAmount: selectOrderAmount(state),
    checkoutState: selectCheckoutState(state),
  })),
)(ViewCartButtonHOC);