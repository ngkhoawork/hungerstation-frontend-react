import React from 'react';
import { connect } from 'react-redux';
import intl from 'utils/intlService';
import PropTypes from 'prop-types';

import { changeOrderFilterAction } from 'modules/restaurants/actions';
import {
  selectChosenDeliveryTime,
  selectChosenMinOrder,
  selectMinOrderRange,
} from 'modules/restaurants/selectors';

import CategoryTitle from '../CategoryTitle';
import { StyledFiltersCategoryWrapper } from '../Styled';
import OrderItem from './OrderItem';
import messages from '../messages';

const decorate = connect(
  state => ({
    chosenDeliveryTime: selectChosenDeliveryTime(state),
    chosenMinOrder: selectChosenMinOrder(state),
    minOrderRange: selectMinOrderRange(state),
  }),
  { changeOrderFilterAction },
);

const Orders = ({
  title,
  // chosenDeliveryTime,
  chosenMinOrder,
  changeOrderFilterAction,
  minOrderRange,
}) => (
  <StyledFiltersCategoryWrapper>
    {title && <CategoryTitle title={title} withoutQuantity />}
    <OrderItem
      label={intl.formatMessage(messages.minimumOrder)}
      range={minOrderRange}
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
  minOrderRange: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }),
  changeOrderFilterAction: PropTypes.func,
};

export default decorate(Orders);
