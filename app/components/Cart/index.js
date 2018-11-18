import React from 'react';
import PropTypes from 'prop-types';
import intl, { priceIntlOptions } from 'utils/intlService';
import { getDeepProp, daysUntilOpen, getTime } from 'utils/helpers';
import ViewCartButton from 'containers/ViewCartButton';
import ModalFrame from 'containers/ModalFrameContainer';
import { Title } from 'components/Typography';
import Notice from 'components/Notice';
import OrderElement from './OrderElement';
import DeliveryTo from './DeliveryTo';
import CartNotice from './Notice';
import Amount from './Amount';
import messages from './messages';
import {
  Wrapper,
  titleStyle,
  From,
  Unshrinkable,
  Items,
  noticeStyle,
} from './StyledComponents';

const Cart = ({
  isModal,
  isCheckout,
  isOrderDetail,
  purchases,
  orderAmount,
  discount,
  deliveryFee,
  city,
  district,
  branch,
  removeFromCart,
  onItemEditClick,
  onCartSubmit,
}) => {
  const minAmount = getDeepProp(branch, [
    'delivery_conditions',
    0,
    'minimum_order',
  ]);
  const from = getDeepProp(branch, ['restaurant', 'name']);

  const title = intl.formatMessage(
    messages[isCheckout ? 'yourOrderFrom' : 'yourOrder'],
  );

  const renderSubtitle = () => {
    if (isCheckout) return <From>{from}</From>;

    if (city && district) return <DeliveryTo city={city} district={district} />;

    return null;
  };

  const renderNotice = () => {
    const name = getDeepProp(branch, ['restaurant', 'name']);
    let message;

    if (branch.status === 'busy') {
      message = intl.formatMessage(messages.busy, { name });
    }

    if (branch.status === 'soon') {
      const allMessages = [intl.formatMessage(messages.closed, { name })];

      const weektimes = getDeepProp(
        branch.working_time || branch.restaurant.working_time,
        ['weektimes', 0],
      );
      const { start_minute } = weektimes || {};

      if (typeof start_minute === 'number') {
        const daysDiff = daysUntilOpen(weektimes);

        if (daysDiff === 1) {
          allMessages.push(
            intl.formatMessage(messages.tmrw, { time: getTime(start_minute) }),
          );
        } else {
          const date = new Date();
          date.setDate(date.getDate() + daysDiff);

          allMessages.push(
            intl.formatMessage(messages.soon, {
              time: getTime(start_minute),
              day: intl.formatDate(date, { weekday: 'short' }),
            }),
          );
        }
      }

      message = allMessages.join(' ');
    }

    if (minAmount > orderAmount) {
      message = intl.formatMessage(messages.minOrderError, {
        restaurantName: from,
        minAmount: intl.formatNumber(minAmount, priceIntlOptions),
        orderAmount: intl.formatNumber(orderAmount, priceIntlOptions),
      });
    }

    return message ? (
      <Notice message={message} type="error" size="s" style={noticeStyle} />
    ) : null;
  };

  const renderCart = () => (
    <Wrapper isModal={isModal}>
      <Unshrinkable isModal={isModal}>
        {isModal ? null : <Title style={titleStyle}>{title}</Title>}
        {renderSubtitle()}
      </Unshrinkable>
      <Items isModal={isModal}>
        {purchases.map(purchase => (
          <OrderElement
            {...purchase.product}
            additions={purchase.additions}
            quantity={purchase.quantity}
            key={purchase.id}
            onRemoveFromCart={() => removeFromCart(purchase.id)}
            onEditClick={() => onItemEditClick(purchase)}
            readOnly={isOrderDetail}
          />
        ))}
      </Items>
      <Unshrinkable>
        {renderNotice()}
        <Amount
          label={intl.formatMessage(messages.amount)}
          amount={orderAmount}
        />
        {isCheckout ? (
          <Amount
            label={intl.formatMessage(messages.deliveryFee)}
            note={
              deliveryFee === undefined
                ? intl.formatMessage(messages.selectDelivery)
                : ''
            }
            amount={deliveryFee}
          />
        ) : null}
        {discount ? (
          <Amount
            label={intl.formatMessage(messages.discount)}
            amount={-discount}
          />
        ) : null}
        <Amount
          isTotal
          label={intl.formatMessage(messages.total)}
          amount={
            isCheckout
              ? orderAmount + (deliveryFee || 0) - discount
              : orderAmount
          }
        />
        {isCheckout ? <CartNotice /> : null}
        <ViewCartButton isModal={isModal} onClick={onCartSubmit} />
      </Unshrinkable>
    </Wrapper>
  );

  if (isModal)
    return (
      <ModalFrame isFullscreen title={title}>
        {renderCart()}
      </ModalFrame>
    );

  return renderCart();
};

Cart.propTypes = {
  isModal: PropTypes.bool,
  isCheckout: PropTypes.bool,
  purchases: PropTypes.array.isRequired,
  orderAmount: PropTypes.number.isRequired,
  deliveryFee: PropTypes.number,
  discount: PropTypes.number,
  city: PropTypes.string,
  district: PropTypes.string,
  branch: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  onItemEditClick: PropTypes.func.isRequired,
  onCartSubmit: PropTypes.func,
};

export default Cart;
