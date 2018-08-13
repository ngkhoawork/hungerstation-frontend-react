import React from 'react';
import PropTypes from 'prop-types';

import StyledLink from './StyledLink';

const TextLink = ({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
);

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TextLink;
