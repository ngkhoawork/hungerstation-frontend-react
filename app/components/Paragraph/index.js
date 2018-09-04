import React from 'react';

import StyledParagraph from './StyledParagraph';

const Paragraph = ({ children, size, ...rest }) => (
  <StyledParagraph size={size} {...rest}>
    {children}
  </StyledParagraph>
);

Paragraph.defaultProps = {
  size: 'small',
};

export default Paragraph;
