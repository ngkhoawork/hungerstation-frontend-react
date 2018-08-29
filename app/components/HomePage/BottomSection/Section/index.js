import React from 'react';
import PropTypes from 'prop-types';

import StyledSection from './StyledSection';
import SpaceColumn from './SpaceColumn';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Section = ({ leftSection, rightSection, hasBackground }) => (
  <StyledSection hasBackground={hasBackground}>
    <SpaceColumn />
    <LeftSection>{leftSection}</LeftSection>
    <RightSection>{rightSection}</RightSection>
  </StyledSection>
);

Section.propTypes = {
  leftSection: PropTypes.func.isRequired,
  rightSection: PropTypes.func.isRequired,
  hasBackground: PropTypes.bool.isRequired,
};

export default Section;
