import React from 'react';
import StyledFooter from './StyledFooter';
import UpperSection from './UpperSection';
import BottomSection from './BottomSection';

const Footer = props => (
  <StyledFooter {...props}>
    <UpperSection />
    <BottomSection />
  </StyledFooter>
);

export default Footer;
