import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl, { priceIntlOptions } from 'utils/intlService';
import { mediaMedium, mediaLargeGreater, flex } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';
import {
  fontFamilyLight,
  headerHeight,
  navHeaderHeight,
} from 'utils/css/variables';
import { Title } from 'components/Typography';
import Notice from 'components/Notice';
import OrderElement from './OrderElement';
import DeliveryTo from './DeliveryTo';
import CartNotice from './Notice';
import Amount from './Amount';
import ViewCartButton from './ViewCartButton';
import messages from './messages';

const Wrapper = styled.section`
  border-radius: 0 0 8px 8px;
  background-color: white;
  padding: 20px 20px 30px 20px;
  box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.1);
  flex: 0 0 353px;
  max-width: 353px;
  max-height: calc(100vh - ${headerHeight} - ${navHeaderHeight});
  ${flex({ direction: 'column' })};

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
`;

const Items = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 130px;
  flex-shrink: 0;
`;

const Cart = ({
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
  const renderSubtitle = () => {
    if (isCheckout) return <From>{from}</From>;

    if (city && district) return <DeliveryTo city={city} district={district} />;

    return null;
  };

  return (
    <Wrapper>
      <Unshrinkable>
        <Title style={titleStyle}>
          {intl.formatMessage(
            messages[isCheckout ? 'yourOrderFrom' : 'yourOrder'],
          )}
        </Title>
        {renderSubtitle()}
      </Unshrinkable>
      <Items>
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
          amount={orderAmount + (deliveryFee || 0) - discount}
        />
        {isCheckout ? <CartNotice /> : null}
        <ViewCartButton
          isCheckout={isCheckout}
          isDisabled={!purchases.length || minAmount > orderAmount}
        />
      </Unshrinkable>
    </Wrapper>
  );
};

Cart.propTypes = {
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

export { ViewCartButton };
export default Cart;
