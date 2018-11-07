import React from 'react';
import PropTypes from 'prop-types';

import StyledSection from './StyledSection';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Section = ({ leftSection, rightSection }) => (
  <StyledSection>
    <RightSection>{rightSection}</RightSection>
    <LeftSection>{leftSection}</LeftSection>
  </StyledSection>
);

Section.propTypes = {
  leftSection: PropTypes.object,
  rightSection: PropTypes.object,
};

export default Section;
