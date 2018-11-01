import React from 'react';
import PageContent from 'components/PageContent';
import Back from 'containers/Back';
import styled from 'styled-components';
import { flex } from 'utils/css/styles';

import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import withRestaurants from 'hocs/withRestaurants';

import Breadcrumbs from 'components/Breadcrumbs';
import RestaurantsSection from './RestaurantsSection';
import FiltersSection from './FiltersSection';
import FiltersWrapper from './FiltersWrapper';

import StyledListPage from './StyledListPage';

const NavHeader = styled.div`
  height: 56px;
  padding: 0;
  ${flex({ align: 'center', justify: 'flex-start' })};
  margin-bottom: 20px;
`;

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
