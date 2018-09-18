import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import StyledIndicator from './StyledIndicator';

const Indicator = ({ value, size }) => (
  <StyledIndicator size={size}>
    <Paragraph color="white" size={12}>
      {value}
    </Paragraph>
  </StyledIndicator>
);

Indicator.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number,
};

Indicator.defaultProps = {
  size: 16,
};

export default Indicator;
