import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Loader from 'components/Loader';
import PaymentSection from './PaymentSection';
import OptionContainer from './OptionContainer';
import Cards from './Cards';
import Coupon from './Coupon';
import messages from './messages';

const PaymentOptions = ({
  cards,
  selectedOption = {},
  onOptionSelect,
  coupon,
  isCouponLoading,
  onCouponSubmit,
  onCouponDelete,
  onClearCouponError,
}) => (
  <div>
    {isCouponLoading ? (
      <Loader
        isFullscreen
        label={intl.formatMessage(messages.applyingCoupon)}
      />
    ) : null}
    {cards && cards.length ? (
      <Cards
        cards={cards}
        selectedOption={selectedOption}
        onSelect={onOptionSelect}
      />
    ) : null}
    <PaymentSection
    // title={intl.formatMessage(messages.cash)}
    >
      <OptionContainer
        onSelect={() => onOptionSelect({ id: 'cash' })}
        isSelected={selectedOption.id === 'cash'}
        icon="cash"
        title={intl.formatMessage(messages.cashOnDelivery)}
      />
    </PaymentSection>
    <Coupon
      coupon={coupon}
      onSubmit={onCouponSubmit}
      onDelete={onCouponDelete}
      onClearCouponError={onClearCouponError}
    />
  </div>
);

PaymentOptions.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  coupon: PropTypes.object,
  isCouponLoading: PropTypes.bool,
  selectedOption: PropTypes.object,
  onOptionSelect: PropTypes.func.isRequired,
  onCouponSubmit: PropTypes.func.isRequired,
  onCouponDelete: PropTypes.func.isRequired,
  onClearCouponError: PropTypes.func.isRequired,
};

export default PaymentOptions;
