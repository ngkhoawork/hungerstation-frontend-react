import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/Spinner';

import StyledButton from './StyledButton';
import Text from './Text';

const Button = ({
  primary,
  inline,
  size,
  label,
  color,
  backgroundImage,
  children,
  lift,
  disabled,
  loading,
  onClick,
}) => (
  <StyledButton
    primary={primary}
    inline={inline}
    size={size}
    type="button"
    color={color}
    backgroundImage={backgroundImage}
    lift={lift}
    disabled={disabled}
    loading={loading}
    onClick={onClick}
  >
    {children}
    {loading ? <Spinner isActive /> : <Text>{label}</Text>}
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.bool,
  inline: PropTypes.bool,
  size: PropTypes.string,
  label: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  lift: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: null,
  primary: true,
  backgroundImage: null,
  children: null,
  color: 'white',
  lift: true,
  disabled: false,
  loading: false,
};

export default Button;
