import React from 'react';
import PropTypes from 'prop-types';
import { fuscousGray } from 'utils/colors';

import StyledParagraph from './StyledParagraph';

const Paragraph = ({ children, ...rest }) => (
  <StyledParagraph {...rest}>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.string,
};

Paragraph.defaultProps = {
  light: false,
  color: fuscousGray,
  size: 14,
};

export default Paragraph;
