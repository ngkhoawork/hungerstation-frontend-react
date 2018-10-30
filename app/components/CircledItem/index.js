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
  inline,
  style,
}) => (
  <StyledItem width={width} inline={inline} onClick={onClick} style={style}>
    <Circle color={color} width={width} withShadow={withShadow} />
    {children}
  </StyledItem>
);

CircledItem.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  children: PropTypes.node,
  withShadow: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

CircledItem.defaultProps = {
  children: null,
};

export default CircledItem;
