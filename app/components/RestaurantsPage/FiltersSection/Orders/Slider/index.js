import React from 'react';
import PropTypes from 'prop-types';
import { silverChalice } from 'utils/colors';

import Paragraph from 'components/Paragraph';
import StyledInput from './StyledInput';
import StyledSliderContainer from './StyledSliderContainer';

const Slider = ({ label, range }) => (
  <StyledSliderContainer>
    <Paragraph color={silverChalice}>{label}</Paragraph>
    <StyledInput min={range.min} max={range.max} />
  </StyledSliderContainer>
);

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  range: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};

export default Slider;
