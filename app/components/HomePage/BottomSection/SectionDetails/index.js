import React from 'react';
import PropTypes from 'prop-types';

import StyledBox from './StyledBox';
import Header from './Header';
import DetailsText from './DetailsText';

const SectionDetails = ({ header, description, children, left }) => (
  <StyledBox left={left}>
    <Header>{header}</Header>
    <DetailsText>{description}</DetailsText>
    {children}
  </StyledBox>
);

SectionDetails.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element,
  left: PropTypes.bool,
};

SectionDetails.defaultProps = {
  children: null,
  left: false,
};

export default SectionDetails;
