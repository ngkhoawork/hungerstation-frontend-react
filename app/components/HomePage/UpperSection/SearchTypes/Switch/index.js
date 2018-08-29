import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Checkbox from './Checkbox';
import Slider from './Slider';

const Switch = ({ onSelect }) => (
  <Container>
    <Checkbox onChange={e => onSelect(e.target.checked)} />
    <Slider />
  </Container>
);

Switch.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Switch;
