import React from 'react';
import PropTypes from 'prop-types';

import SectionDetails from 'components/SectionDetails';
import StyledSection from './StyledSection';
import Graphics from './Graphics';

const Section = ({ direction, header, description, background, children }) => (
  <StyledSection direction={direction} background={background}>
    <SectionDetails header={header} description={description}>
      {React.Children.map(children, (child, i) => {
        if (i === 0) return child;
        return null;
      })}
    </SectionDetails>
    <Graphics>
      {React.Children.map(children, (child, i) => {
        if (i < 1) return null;
        return child;
      })}
    </Graphics>
  </StyledSection>
);

Section.propTypes = {
  direction: PropTypes.string,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element,
  background: PropTypes.bool,
};

Section.defaultProps = {
  direction: 'row',
  background: false,
};

export default Section;
