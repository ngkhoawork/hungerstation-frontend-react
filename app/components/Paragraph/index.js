import React from 'react';
import PropTypes from 'prop-types';
import { fuscousGray } from 'utils/colors';

import StyledParagraph from './StyledParagraph';

const Paragraph = ({ children, light, size, color }) => (
  <StyledParagraph light={light} size={size} color={color}>
    {children}
  </StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  light: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
};

Paragraph.defaultProps = {
  light: false,
  color: fuscousGray,
  size: 14,
};

export default Paragraph;
