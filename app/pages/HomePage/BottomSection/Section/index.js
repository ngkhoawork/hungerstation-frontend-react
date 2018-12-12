import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, LeftSection, RightSection } from './StyledComponents';

const Section = ({
  leftSection,
  rightSection,
  rightSectionCss,
  hasBackground,
  leftSectionCss,
  css,
}) => (
  <StyledSection hasBackground={hasBackground} css={css}>
    <LeftSection css={leftSectionCss} hasBackground={hasBackground}>
      {leftSection}
    </LeftSection>
    <RightSection css={rightSectionCss}>{rightSection}</RightSection>
  </StyledSection>
);

Section.propTypes = {
  leftSection: PropTypes.object,
  rightSection: PropTypes.object,
  hasBackground: PropTypes.bool,
  css: PropTypes.array,
  rightSectionCss: PropTypes.array,
  leftSectionCss: PropTypes.array,
};

Section.defaultProps = {
  leftSection: null,
  rightSection: null,
  hasBackground: false,
};

export default Section;
