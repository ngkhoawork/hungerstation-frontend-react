import React from 'react';
import PropTypes from 'prop-types';

import StyledItem from './StyledItem';
import Square from './Square';

const SquaredItem = ({ width, children, color, withShadow, height }) => (
  <StyledItem width={width} height={height}>
    <Square
      color={color}
      width={width}
      height={height}
      withShadow={withShadow}
    />
    {children}
  </StyledItem>
);

SquaredItem.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
  withShadow: PropTypes.bool,
};

SquaredItem.defaultProps = {
  children: null,
};

export default SquaredItem;
