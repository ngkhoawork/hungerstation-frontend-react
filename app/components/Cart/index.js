import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { mediaMedium, flex } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';
import {
  fontFamilyLight,
  headerHeight,
  navHeaderHeight,
} from 'utils/css/variables';
import { Title } from 'components/Typography';
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
  padding: 20px 20px 30px 20px;
  box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.1);
  flex: 0 0 353px;
  max-width: 353px;
  max-height: calc(100vh - ${headerHeight} - ${navHeaderHeight});
  ${flex({ direction: 'column' })};

  ${mediaMedium`width: 100%; max-width: 100%;`};
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
    <Unshrinkable>
      <Title style={titleStyle}>
        {intl.formatMessage(
          messages[isCheckout ? 'yourOrderFrom' : 'yourOrder'],
        )}
      </Title>
      {isCheckout ? <From>{from}</From> : <DeliveryTo />}
    </Unshrinkable>
    <Items>
      {purchases.map(purchase => (
        <OrderElement
          {...purchase.product}
          additions={purchase.additions}
          quantity={purchase.quantity}
          key={purchase.id}
          onRemoveFromCart={() => removeFromCart(purchase.id)}
        />
      ))}
    </Items>
    <Unshrinkable>
      {/* <MinOrderErrBox currentAmount={orderAmount} /> */}
      <Amount
        label={intl.formatMessage(messages.amount)}
        amount={orderAmount}
      />
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
    </Unshrinkable>
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
