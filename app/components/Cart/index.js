import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import OrderElement from './OrderElement';
import DeliveryTo from './DeliveryTo';
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

const Cart = ({ purchases, orderAmount, removeFromCart }) => (
  <Wrapper>
    <Title>{intl.formatMessage(messages.yourOrder)}</Title>
    <DeliveryTo />
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
    <Amount amount={orderAmount} />
    <Amount isTotal amount={orderAmount} />
    <ViewCartButton />
  </Wrapper>
);

Cart.propTypes = {
  purchases: PropTypes.array.isRequired,
  orderAmount: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export { ViewCartButton };
export default Cart;
