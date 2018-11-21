import React from 'react';

import { withHeaderAndFooter } from 'hocs/withInsertLayout';

import PageContent from 'components/PageContent';
import Back from 'containers/Back';
import AboutUs from '../../../components/AboutUs';

const AboutUsPage = () => (
  <PageContent>
    <Back />
    <AboutUs />
  </PageContent>
);
export default withHeaderAndFooter(AboutUsPage);
