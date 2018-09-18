import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledScrollButton from './StyledScrollButton';

const ScrollUp = ({ onClick }) => (
  <StyledScrollButton onClick={onClick}>
    <Icon name="arrow-right" />
  </StyledScrollButton>
);

ScrollUp.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ScrollUp;
