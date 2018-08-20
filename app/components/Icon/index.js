import React from 'react';
import PropTypes from 'prop-types';

import getIcon from 'utils/icons';
import StyledIcon from './StyledIcon';

const Icon = ({ name, size }) => (
  <StyledIcon size={size} src={getIcon(name)} alt={name} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 25,
};

export default Icon;
