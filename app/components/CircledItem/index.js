import React from 'react';
import PropTypes from 'prop-types';

import StyledItem from './StyledItem';
import Circle from './Circle';

const CircledItem = ({ width, children, color, withShadow }) => (
  <StyledItem width={width}>
    <Circle color={color} width={width} withShadow={withShadow} />
    {children}
  </StyledItem>
);

CircledItem.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
  withShadow: PropTypes.bool,
};

CircledItem.defaultProps = {
  children: null,
};

export default CircledItem;
