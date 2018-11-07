import React from 'react';
import PropTypes from 'prop-types';

import StyledBox from './StyledBox';
import Header from './Header';
import DetailsText from './DetailsText';

const SectionDetails = ({ header, description, left }) => (
  <StyledBox left={left}>
    <Header>{header}</Header>
    <DetailsText>{description}</DetailsText>
  </StyledBox>
);

SectionDetails.propTypes = {
  header: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  description: PropTypes.string.isRequired,
  left: PropTypes.bool,
};

SectionDetails.defaultProps = {
  left: false,
};

export default SectionDetails;
