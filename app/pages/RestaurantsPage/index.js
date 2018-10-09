import React from 'react';

import PageContent from 'components/PageContent';
import FiltersContainer from 'containers/FiltersContainer';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';

import RestaurantsSection from './RestaurantsSection';
import FiltersSection from './FiltersSection';
import FiltersWrapper from './FiltersWrapper';

import StyledListPage from './StyledListPage';

const RestaurantsPage = () => (
  <PageContent>
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
