import React from 'react';
import PropTypes from 'prop-types';

import StyledSection from './StyledSection';

const Section = ({ children, header }) => (
  <StyledSection>
    {header}
    {children}
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
};

export default Section;
