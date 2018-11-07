import React from 'react';

import { withHeaderAndFooter } from 'hocs/withInsertLayout';

import PageContent from 'components/PageContent';
import Back from 'containers/Back';
import PrivacyPolicy from 'components/PrivacyPolicy';

const FAQsPage = () => (
  <PageContent>
    <Back />
    <PrivacyPolicy />
  </PageContent>
);
export default withHeaderAndFooter(FAQsPage);
