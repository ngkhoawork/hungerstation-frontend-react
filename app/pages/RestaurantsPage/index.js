import React from 'react';
import PageContent from 'components/PageContent';
import Back from 'containers/Back';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import withRestaurants from 'hocs/withRestaurants';
import Breadcrumbs from 'components/Breadcrumbs';
import { NavHeader } from 'utils/css/styledComponents';
import RestaurantsSection from './RestaurantsSection';
import FiltersSection from './FiltersSection';
import FiltersWrapper from './FiltersWrapper';
import StyledListPage from './StyledListPage';

const RestaurantsPage = () => (
  <PageContent>
    <NavHeader>
      <Back />
      <Breadcrumbs />
    </NavHeader>
    <StyledListPage>
      <FiltersWrapper>
        <FiltersSection />
      </FiltersWrapper>
      <RestaurantsSection />
    </StyledListPage>
  </PageContent>
);

export default withRestaurants(withHeaderAndFooter(RestaurantsPage));
