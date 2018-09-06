import React from 'react';

import FiltersContainer from 'containers/FiltersContainer';
import RestaurantsSection from './RestaurantsSection';
import FiltersSection from './FiltersSection';

import StyledListPage from './StyledListPage';

const RestaurantsPage = () => (
  <StyledListPage>
    <FiltersContainer>
      {props => <FiltersSection {...props} />}
    </FiltersContainer>
    <RestaurantsSection />
  </StyledListPage>
);

export default RestaurantsPage;
