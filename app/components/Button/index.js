import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import Text from './Text';

const Button = ({ primary, label, backgroundImage }) => (
  <StyledButton
    primary={primary}
    type="button"
    backgroundImage={backgroundImage}
  >
    <Text>{label}</Text>
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string,
  backgroundImage: PropTypes.string,
};

Button.defaultProps = {
  label: null,
  primary: true,
  backgroundImage: null,
};

export default Button;
