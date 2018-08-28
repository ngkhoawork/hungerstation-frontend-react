import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import Circle from 'components/Circle';
import StyledIndicator from './StyledIndicator';

const Indicator = ({ value }) => (
  <StyledIndicator>
    <Paragraph color="white">{value}</Paragraph>
    <Circle color="#35c635" />
  </StyledIndicator>
);

Indicator.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Indicator;
