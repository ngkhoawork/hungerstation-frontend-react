import React from 'react';

import StyledContainer from '../StyledContainer';
import OrderItem from './OrderItem';

const Orders = () => (
  <StyledContainer>
    <OrderItem label="Minimum order" range={{ min: 0, max: 10 }} value={5} />
    <OrderItem label="Time estimation" range={{ min: 0, max: 10 }} value={3} />
  </StyledContainer>
);

export default Orders;
