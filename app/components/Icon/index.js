import React from 'react';
import PropTypes from 'prop-types';

import getIcon from 'utils/icons';
import StyledIcon from './StyledIcon';
import Circle from './Circle';
import IconWrapper from './IconWrapper';

// const Icon = ({ name, size, circled }) => (
//   <StyledIcon size={size} src={getIcon(name)} alt={name} circled={circled} />
// );

const Icon = ({ name, circled }) => (
  <IconWrapper>
    <StyledIcon src={getIcon(name)} alt={name} />
    {circled && <Circle />}
  </IconWrapper>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  circled: PropTypes.bool,
};

Icon.defaultProps = {
  circled: false,
};

export default Icon;
