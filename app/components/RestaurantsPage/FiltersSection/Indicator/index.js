import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import StyledIndicator from './StyledIndicator';

const Indicator = ({ value }) => (
  <StyledIndicator size={16}>
    <Paragraph color="white">{value}</Paragraph>
  </StyledIndicator>
);

Indicator.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Indicator;
