import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import Text from './Text';

const Button = ({ primary, label, type, onClick, width }) => (
  <StyledButton primary={primary} type={type} onClick={onClick} width={width}>
    <Text>{label}</Text>
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number.isRequired,
};

Button.defaultProps = {
  primary: true,
  type: 'button',
  onClick: () => ({}),
};

export default Button;
