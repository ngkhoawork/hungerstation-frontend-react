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
  leftSection: PropTypes.object,
  rightSection: PropTypes.object,
  hasBackground: PropTypes.bool,
};

Section.defaultProps = {
  leftSection: null,
  rightSection: null,
  hasBackground: false,
};

export default Section;
