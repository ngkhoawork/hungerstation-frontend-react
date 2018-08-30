import React from 'react';
import PropTypes from 'prop-types';

import StyledOrderItem from './StyledOrderItem';
import Slider from '../Slider';

const OrderItem = ({ label, range, value }) => (
  <StyledOrderItem>
    <Slider label={`${label} ${value}`} range={range} value={value} />
  </StyledOrderItem>
);

OrderItem.propTypes = {
  label: PropTypes.string.isRequired,
  range: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  value: PropTypes.number.isRequired,
};

export default OrderItem;
