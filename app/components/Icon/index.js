import React from 'react';
import PropTypes from 'prop-types';

import getIcon from 'utils/css/icons';
import StyledIcon from './StyledIcon';
import IconWrapper from './IconWrapper';

const Icon = ({ name, size }) => (
  <IconWrapper>
    <StyledIcon src={getIcon(name)} alt={name} size={size} />
  </IconWrapper>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Icon;
