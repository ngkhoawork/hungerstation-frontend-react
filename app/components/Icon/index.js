import React from 'react';
import PropTypes from 'prop-types';

import getIcon from 'utils/icons';
import StyledIcon from './StyledIcon';

const Icon = ({ name, size, circled }) => (
  <StyledIcon size={size} src={getIcon(name)} alt={name} circled={circled} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  circled: PropTypes.bool,
};

Icon.defaultProps = {
  circled: false,
};

export default Icon;
