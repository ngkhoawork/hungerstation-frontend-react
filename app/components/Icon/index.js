import React from 'react';
import PropTypes from 'prop-types';

import getIcon from 'utils/icons';
import { wildSant } from 'utils/colors';
import Circle from 'components/Circle';
import StyledIcon from './StyledIcon';
import IconWrapper from './IconWrapper';

const Icon = ({ name, circled, size }) => (
  <IconWrapper>
    <StyledIcon src={getIcon(name)} alt={name} size={size} />
    {circled && <Circle color={wildSant} />}
  </IconWrapper>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  circled: PropTypes.bool,
  size: PropTypes.number,
};

Icon.defaultProps = {
  circled: false,
  // size: 12,
};

export default Icon;
