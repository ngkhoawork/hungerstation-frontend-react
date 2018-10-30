import React from 'react';
import PropTypes from 'prop-types';

import getIcon from 'utils/css/icons';
import StyledIcon from './StyledIcon';
import IconWrapper from './IconWrapper';

const Icon = ({ name, size, offsetY, style, onClick }) => (
  <IconWrapper offsetY={offsetY} style={style} onClick={onClick}>
    <StyledIcon src={getIcon(name)} alt={name} size={size} />
  </IconWrapper>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  style: PropTypes.object,
  offsetY: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
