import React from 'react';
import PropTypes from 'prop-types';

import StyledItem from './StyledItem';
import Circle from './Circle';

const CircledItem = ({ width, children, color }) => (
  <StyledItem width={width}>
    <Circle color={color} width={width} />
    {children}
  </StyledItem>
);

CircledItem.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};

CircledItem.defaultProps = {
  children: null,
};

export default CircledItem;
