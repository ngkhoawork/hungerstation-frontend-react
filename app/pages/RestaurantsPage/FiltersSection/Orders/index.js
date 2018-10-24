import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MIN_ORDER_RANGE,
  // TIME_ESTIMATION_RANGE,
} from 'modules/restaurants/constants';
import { changeOrderFilterAction } from 'modules/restaurants/actions';
import {
  selectChosenDeliveryTime,
  selectChosenMinOreder,
} from 'modules/restaurants/selectors';

import CategoryTitle from '../CategoryTitle';
import { StyledFiltersCategoryWrapper } from '../Styled';
import OrderItem from './OrderItem';

const decorate = connect(
  state => ({
    chosenDeliveryTime: selectChosenDeliveryTime(state),
    chosenMinOrder: selectChosenMinOreder(state),
  }),
  { changeOrderFilterAction },
);

const Orders = ({
  title,
  // chosenDeliveryTime,
  chosenMinOrder,
  changeOrderFilterAction,
}) => (
  <StyledFiltersCategoryWrapper>
    {title && <CategoryTitle title={title} withoutQuantity />}
    <OrderItem
      label="Minimum order"
      range={MIN_ORDER_RANGE}
      filterKey="min_order"
      toggleFilterAction={changeOrderFilterAction}
      value={chosenMinOrder}
    />
    {/* <OrderItem
      label="Time estimation"
      range={TIME_ESTIMATION_RANGE}
      filterKey="delivery_time"
      toggleFilterAction={changeOrderFilterAction}
      value={chosenDeliveryTime}
    /> */}
  </StyledFiltersCategoryWrapper>
);

Orders.propTypes = {
  title: PropTypes.string,
  // chosenDeliveryTime: PropTypes.number,
  chosenMinOrder: PropTypes.number,
  changeOrderFilterAction: PropTypes.func,
};

export default decorate(Orders);
