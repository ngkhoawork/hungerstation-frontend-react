import React from 'react';
import PropTypes from 'prop-types';

import getIcon from 'utils/icons';
import StyledIcon from './StyledIcon';

const Icon = ({ name }) => <StyledIcon src={getIcon(name)} alt={name} />;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
