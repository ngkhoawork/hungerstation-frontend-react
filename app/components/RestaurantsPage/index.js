import React from 'react';

import FiltersContainer from 'containers/FiltersContainer';
import RestaurantsSection from './RestaurantsSection';

import StyledListPage from './StyledListPage';

const RestaurantsPage = () => (
  <StyledListPage>
    <FiltersContainer />
    <RestaurantsSection />
  </StyledListPage>
);

export default RestaurantsPage;
