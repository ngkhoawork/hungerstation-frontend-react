import React from 'react';
import PropTypes from 'prop-types';
import { silverChalice, boulder } from 'utils/colors';

import Paragraph from 'components/Paragraph';
import StyledInput from './StyledInput';
import StyledSliderContainer from './StyledSliderContainer';
import StyledLabel from './StyledLabel';

const Slider = ({ label, value, range }) => (
  <StyledSliderContainer>
    <StyledLabel>
      <Paragraph light color={silverChalice}>
        {label}
      </Paragraph>
      <Paragraph color={boulder}>{value}</Paragraph>
    </StyledLabel>
    <StyledInput min={range.min} max={range.max} />
  </StyledSliderContainer>
);

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  range: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};

export default Slider;
