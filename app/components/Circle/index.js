import React from 'react';
import PropTypes from 'prop-types';
import { wildSant } from 'utils/colors';

import StyledCircle from './StyledCircle';

const Circle = ({ color, size }) => <StyledCircle size={size} color={color} />;

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Circle.defaultProps = {
  color: wildSant,
  size: 20,
};

export default Circle;
