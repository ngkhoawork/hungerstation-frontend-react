import React from 'react';

import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import { NavHeader } from 'utils/css/styledComponents';
import Back from 'containers/Back';
import PrivacyPolicy from 'components/PrivacyPolicy';
import StyledPage from '../StyledPage';

const FAQsPage = () => (
  <StyledPage>
    <NavHeader isWithOffset>
      <Back />
    </NavHeader>
    <PrivacyPolicy />
  </StyledPage>
);
export default withHeaderAndFooter(FAQsPage);
