import React from 'react';

import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import { NavHeader } from 'utils/css/styledComponents';

import Back from 'containers/Back';
import AboutUs from 'components/AboutUs';
import StyledPage from '../StyledPage';

const AboutUsPage = () => (
  <StyledPage style={{ padding: '0 10px' }}>
    <NavHeader isWithOffset>
      <Back />
    </NavHeader>
    <AboutUs />
  </StyledPage>
);
export default withHeaderAndFooter(AboutUsPage);
