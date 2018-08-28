import React from 'react';
import PropTypes from 'prop-types';
import { wildSant } from 'utils/colors';

import StyledCircle from './StyledCircle';

const Circle = ({ color }) => <StyledCircle color={color} />;

Circle.propTypes = {
  color: PropTypes.string,
};

Circle.defaultProps = {
  color: wildSant,
};

export default Circle;
