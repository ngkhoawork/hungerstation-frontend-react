import React from 'react';
import PropTypes from 'prop-types';

import getIcon from 'utils/icons';
import { wildSant } from 'utils/colors';
import Circle from 'components/Circle';
import StyledIcon from './StyledIcon';
import IconWrapper from './IconWrapper';

const Icon = ({ name, circled }) => (
  <IconWrapper>
    <StyledIcon src={getIcon(name)} alt={name} />
    {circled && <Circle color={wildSant} />}
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
