import React from 'react';
import PropTypes from 'prop-types';

import StyledBox from './StyledBox';
import Header from './Header';
import DetailsText from './DetailsText';

const SectionDetails = ({ header, description, children }) => (
  <StyledBox>
    <Header>{header}</Header>
    <DetailsText>{description}</DetailsText>
    {children}
  </StyledBox>
);

SectionDetails.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element,
};

SectionDetails.defaultProps = {
  children: null,
};

export default SectionDetails;
