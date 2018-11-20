import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/Spinner';

import StyledButton from './StyledButton';
import Text from './Text';

const Button = ({ children, label, loading, fontSize, onClick, ...props }) => (
  <StyledButton
    type="button"
    onClick={props.disabled ? undefined : onClick}
    {...props}
  >
    {children}
    {loading ? <Spinner isActive /> : <Text fontSize={fontSize}>{label}</Text>}
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.bool,
  inline: PropTypes.bool,
  size: PropTypes.string,
  label: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  color: PropTypes.string,
  lift: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  fontSize: PropTypes.number,
  style: PropTypes.object,
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
  fontSize: 14,
};

export default Button;
