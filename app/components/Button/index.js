import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import Text from './Text';

const Button = ({ primary, label, color, backgroundImage, children }) => (
  <StyledButton
    primary={primary}
    type="button"
    color={color}
    backgroundImage={backgroundImage}
  >
    {children}
    <Text>{label}</Text>
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.object,
  color: PropTypes.string,
};

Button.defaultProps = {
  label: null,
  primary: true,
  backgroundImage: null,
  children: null,
  color: 'white',
};

export default Button;
