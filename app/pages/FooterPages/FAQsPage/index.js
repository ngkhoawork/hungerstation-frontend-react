import React from 'react';

import { withHeaderAndFooter } from 'hocs/withInsertLayout';

import PageContent from 'components/PageContent';
import Back from 'containers/Back';
import FAQs from 'components/FAQs';

const FAQsPage = () => (
  <PageContent>
    <Back />
    <FAQs />
  </PageContent>
);

export default withHeaderAndFooter(FAQsPage);
