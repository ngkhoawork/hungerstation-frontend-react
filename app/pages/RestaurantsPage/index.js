import React from 'react';
import PageContent from 'components/PageContent';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import withRestaurants from 'hocs/withRestaurants';

import RestaurantsSection from './RestaurantsSection';
import FiltersSection from './FiltersSection';
import FiltersWrapper from './FiltersWrapper';

import StyledListPage from './StyledListPage';
import Breadcrumbs from '../../components/Breadcrumbs';

const RestaurantsPage = () => (
  <PageContent>
    <Breadcrumbs />
    <StyledListPage>
      <FiltersWrapper>
        <FiltersSection />
      </FiltersWrapper>
      <RestaurantsSection />
    </StyledListPage>
  </PageContent>
);

export default withRestaurants(withHeaderAndFooter(RestaurantsPage));
