import React from 'react';

import FiltersContainer from 'containers/FiltersContainer';
import RestaurantsSection from './RestaurantsSection';
import FiltersSection from './FiltersSection';
import FiltersWrapper from './FiltersWrapper';

import StyledListPage from './StyledListPage';

const RestaurantsPage = () => (
  <StyledListPage>
    <FiltersWrapper>
      <FiltersContainer>
        {props => <FiltersSection {...props} />}
      </FiltersContainer>
    </FiltersWrapper>
    <RestaurantsSection />
  </StyledListPage>
);

export default RestaurantsPage;
