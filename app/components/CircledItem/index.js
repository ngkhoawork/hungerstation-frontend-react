import React from 'react';
import PropTypes from 'prop-types';

import StyledItem from './StyledItem';
import Circle from './Circle';

const CircledItem = ({
  width,
  children,
  color,
  withShadow,
  onClick,
  style,
}) => (
  <StyledItem width={width} onClick={onClick} style={style}>
    <Circle color={color} width={width} withShadow={withShadow} />
    {children}
  </StyledItem>
);

CircledItem.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
  withShadow: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

CircledItem.defaultProps = {
  children: null,
};

export default CircledItem;
