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
  children: PropTypes.func.isRequired,
  header: PropTypes.func.isRequired,
};

export default Section;
