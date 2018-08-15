import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import Text from './Text';

const Button = ({ primary, label, type, onClick }) => (
  <StyledButton primary={primary} type={type} onClick={onClick}>
    <Text>{label}</Text>
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  type: 'button',
  onClick: () => ({}),
};

export default Button;
