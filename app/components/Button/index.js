import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/Spinner';

import StyledButton from './StyledButton';
import Text from './Text';

const Button = ({
  primary,
  label,
  color,
  backgroundImage,
  children,
  lift,
  disabled,
  loading,
}) => (
  <StyledButton
    primary={primary}
    type="button"
    color={color}
    backgroundImage={backgroundImage}
    lift={lift}
    disabled={disabled}
    loading={loading}
  >
    {children}
    {loading ? <Spinner isActive /> : <Text>{label}</Text>}
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.object,
  color: PropTypes.string,
  lift: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
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
