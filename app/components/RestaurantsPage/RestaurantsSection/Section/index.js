import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import StyledSection from './StyledSection';

const Section = ({ title, children }) => (
  <StyledSection>
    <Paragraph size="big">{title}</Paragraph>
    {children}
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Section;
