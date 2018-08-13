import React from 'react';
import PropTypes from 'prop-types';

import StyledLink from './StyledLink';

const TextLink = ({ to, children, color }) => (
  <StyledLink to={to} color={color}>
    {children}
  </StyledLink>
);

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

TextLink.defaultProps = {
  color: 'black',
};

export default TextLink;
