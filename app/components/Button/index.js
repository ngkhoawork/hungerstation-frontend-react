import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import Text from './Text';

const Button = ({ primary, label, type, border, onClick }) => {
  const getBorder = borderSide => {
    switch (borderSide) {
      case 'right':
        return '0 10px 10px 0';
      case 'left':
        return '10px 0 0 10px';
      case 'all':
        return '10px';
      default:
        return 0;
    }
  };
  return (
    <StyledButton
      style={{ borderRadius: getBorder(border) }}
      primary={primary}
      type={type}
      onClick={onClick}
    >
      <Text>{label}</Text>
    </StyledButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  border: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  type: 'button',
  border: 'all',
  onClick: () => ({}),
};

export default Button;
