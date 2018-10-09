import React from 'react';

import PageContent from 'components/PageContent';
import FiltersContainer from 'containers/FiltersContainer';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';

import RestaurantsSection from './RestaurantsSection';
import FiltersSection from './FiltersSection';
import FiltersWrapper from './FiltersWrapper';

import StyledListPage from './StyledListPage';
import Breadcrumbs from '../../components/Breadcrumbs';

const crumbs = [
  {
    key: 'home',
    to: '/',
    label: 'Home',
  },
  {
    key: 'city',
    to: '/restaurants/dammam/dammam-university/',
    label: 'Dammam',
  },
  {
    key: 'district',
    to: '/restaurants/dammam/dammam-university/',
    label: 'Dammam university',
  },
  {
    key: 'cuisines',
    to: '/restaurants/dammam/dammam-university/all-cuisines/',
    label: 'All Cuisines',
  },
  {
    key: 'deliveryType',
    to: '/restaurants/dammam/dammam-university/all-cuisines/all-delivery-type/',
    label: 'All Delivery Types',
  },
];

const RestaurantsPage = () => (
  <PageContent>
    <Breadcrumbs crumbs={crumbs} />
    <StyledListPage>
      <FiltersWrapper>
        <FiltersContainer>
          {props => <FiltersSection {...props} />}
        </FiltersContainer>
      </FiltersWrapper>
      <RestaurantsSection />
    </StyledListPage>
  </PageContent>
);

export default withHeaderAndFooter(RestaurantsPage);
