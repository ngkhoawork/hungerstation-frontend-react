import React from 'react';
import PropTypes from 'prop-types';

import {
  MIN_ORDER_RANGE,
  TIME_ESTIMATION_RANGE,
} from 'modules/restaurants/constants';
import CategoryTitle from '../CategoryTitle';
import { StyledFiltersContainer } from '../Styled';
import OrderItem from './OrderItem';

const Orders = ({ title }) => (
  <StyledFiltersContainer>
    <CategoryTitle title={title} withoutQuantity />
    <OrderItem
      label="Minimum order"
      range={MIN_ORDER_RANGE}
      filterKey="min_order"
    />
    <OrderItem
      label="Time estimation"
      range={TIME_ESTIMATION_RANGE}
      filterKey="delivery_time"
    />
  </StyledFiltersContainer>
);

Orders.propTypes = {
  title: PropTypes.string,
};

export default Orders;
