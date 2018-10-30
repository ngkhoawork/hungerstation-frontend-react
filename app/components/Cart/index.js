import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { fuscousGray } from 'utils/css/colors';
import { fontFamilyLight } from 'utils/css/variables';
import OrderElement from './OrderElement';
import DeliveryTo from './DeliveryTo';
import Notice from './Notice';
// import MinOrderErrBox from './MinOrderErrBox';
import Amount from './Amount';
import ViewCartButton from './ViewCartButton';
import messages from './messages';

const Wrapper = styled.section`
  border-radius: 0 0 8px 8px;
  background-color: white;
  padding: 20px 20px 60px 20px;
  box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.1);
  flex: 0 0 353px;
  max-width: 353px;
`;

const Title = styled.div`
  height: 24px;
  width: 194px;
  color: #434340;
  font-family: 'HungerStation-Regular', sans-serif;
  font-size: 24px;
  letter-spacing: 0.33px;
  line-height: 24px;
  text-align: center;
  margin: 30px auto 16px;
`;

const From = styled.div`
  color: ${fuscousGray};
  font-family: ${fontFamilyLight};
  font-size: 16px;
  line-height: 17px;
  letter-spacing: 0.22px;
  text-align: center;
`;

const Cart = ({
  isCheckout,
  from,
  purchases,
  orderAmount,
  discount,
  removeFromCart,
}) => (
  <Wrapper>
    <Title>
      {intl.formatMessage(messages[isCheckout ? 'yourOrderFrom' : 'yourOrder'])}
    </Title>
    {isCheckout ? <From>{from}</From> : <DeliveryTo />}
    {purchases.map(purchase => (
      <OrderElement
        {...purchase.product}
        additions={purchase.additions}
        quantity={purchase.quantity}
        key={purchase.product.id}
        onRemoveFromCart={removeFromCart}
      />
    ))}
    {/* <MinOrderErrBox currentAmount={orderAmount} /> */}
    <Amount label={intl.formatMessage(messages.amount)} amount={orderAmount} />
    {discount ? (
      <Amount
        label={intl.formatMessage(messages.discount)}
        amount={-discount}
      />
    ) : null}
    <Amount
      isTotal
      label={intl.formatMessage(messages.total)}
      amount={orderAmount}
    />
    {isCheckout ? <Notice /> : null}
    <ViewCartButton isCheckout={isCheckout} />
  </Wrapper>
);

Cart.propTypes = {
  isCheckout: PropTypes.bool,
  from: PropTypes.string,
  purchases: PropTypes.array.isRequired,
  orderAmount: PropTypes.number.isRequired,
  discount: PropTypes.number,
  removeFromCart: PropTypes.func.isRequired,
};

export { ViewCartButton };
export default Cart;
