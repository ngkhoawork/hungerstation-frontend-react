import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { flex } from 'utils/css/styles';
import { jade, lightGray, silverChalice, fuscousGray } from 'utils/css/colors';
import OrderElementDelete from './OrderElementDelete';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  ${flex({ justify: 'space-between' })};
  padding: 20px 0;
  border-bottom: solid 1px ${lightGray};

  :last-child: {
    border-bottom: none;
  }
`;

const Row = styled.div`
  ${flex({ align: 'flex-start' })};
  line-height: 1;
`;

const Quantity = styled.div`
  color: ${jade};
  font-size: 16px;
  margin-right: 10px;
`;

export const Title = styled.div`
  color: ${fuscousGray};
  font-size: 18px;
`;

export const Description = styled.div`
  color: ${silverChalice};
  font-size: 14px;
`;

const Price = styled.div`
  color: ${silverChalice};
  font-size: 16px;
`;

const OrderElement = ({
  id,
  quantity,
  price,
  additions,
  name,
  description,
  onRemoveFromCart,
}) => (
  <Fragment>
    <Wrapper>
      <Row>
        <Quantity>{quantity}x</Quantity>
        <Column>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </Column>
      </Row>
      <Row>
        <Price>
          {intl.formatNumber(
            price + additions.reduce((sum, { price }) => sum + price, 0),
            { style: 'currency', currency: 'SAR' },
          )}
        </Price>
        <OrderElementDelete id={id} onRemoveFromCart={onRemoveFromCart} />
      </Row>
    </Wrapper>
  </Fragment>
);

OrderElement.propTypes = {
  ...OrderElementDelete.propTypes,
  quantity: PropTypes.number.isRequired,
  additions: PropTypes.arrayOf(PropTypes.object),
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default OrderElement;
