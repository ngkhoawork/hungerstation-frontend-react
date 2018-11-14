import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl, { priceIntlOptions } from 'utils/intlService';
import { mediaMedium, mediaLargeGreater, flex } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';
import { fontFamilyLight } from 'utils/css/variables';
import ViewCartButton from 'containers/ViewCartButton';
import ModalFrame from 'containers/ModalFrameContainer';
import { Title } from 'components/Typography';
import Notice from 'components/Notice';
import OrderElement from './OrderElement';
import DeliveryTo from './DeliveryTo';
import CartNotice from './Notice';
import Amount from './Amount';
import messages from './messages';

const Wrapper = styled.section`
  border-radius: 0 0 8px 8px;
  background-color: white;
  padding: 20px 20px 30px 20px;
  box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.1);
  flex: 0 0 353px;
  max-width: 353px;
  ${flex({ direction: 'column' })};

  ${({ isModal }) =>
    isModal &&
    `
    box-shadow: none;
    justify-content: space-between;
    flex-grow: 1;
    padding: 0 10px;
  `};

  ${mediaMedium`width: 100%; min-width: 100%; max-width: 100%;`};
  ${mediaLargeGreater`min-width: 353px;`};
`;

const titleStyle = {
  textAlign: 'center',
  marginBottom: 15,
};

const From = styled.div`
  color: ${fuscousGray};
  font-family: ${fontFamilyLight};
  font-size: 16px;
  line-height: 17px;
  letter-spacing: 0.22px;
  text-align: center;
`;

const Unshrinkable = styled.div`
  ${flex({ shrink: 0 }, false)};

  ${({ isModal }) => isModal && `margin-right: 40px;`};
`;

const Items = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 130px;
  flex-shrink: 0;

  ${({ isModal }) =>
    isModal &&
    `
    max-height: initial;
    flex-shrink: 1;
    margin-bottom: 20px;
  `};
`;

const Cart = ({
  isModal,
  isCheckout,
  from,
  purchases,
  orderAmount,
  minAmount,
  discount,
  deliveryFee,
  city,
  district,
  removeFromCart,
  onItemEditClick,
}) => {
  const title = intl.formatMessage(
    messages[isCheckout ? 'yourOrderFrom' : 'yourOrder'],
  );
  const renderSubtitle = () => {
    if (isCheckout) return <From>{from}</From>;

    if (city && district) return <DeliveryTo city={city} district={district} />;

    return null;
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
          />
        ))}
      </Items>
      <Unshrinkable>
        {minAmount > orderAmount ? (
          <Notice
            message={intl.formatMessage(messages.minOrderError, {
              restaurantName: from,
              minAmount: intl.formatNumber(minAmount, priceIntlOptions),
              orderAmount: intl.formatNumber(orderAmount, priceIntlOptions),
            })}
            type="error"
            size="s"
          />
        ) : null}
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
        <ViewCartButton isModal={isModal} />
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
  from: PropTypes.string,
  purchases: PropTypes.array.isRequired,
  minAmount: PropTypes.number,
  orderAmount: PropTypes.number.isRequired,
  deliveryFee: PropTypes.number,
  discount: PropTypes.number,
  city: PropTypes.string,
  district: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
  onItemEditClick: PropTypes.func.isRequired,
};

export default Cart;
