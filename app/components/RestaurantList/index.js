import React from 'react';

import FiltersContainer from 'containers/FiltersContainer';
import RestaurantsSection from './RestaurantsSection';

import StyledListPage from './StyledListPage';

const RestaurantList = () => (
  <StyledListPage>
    <FiltersContainer />
    <RestaurantsSection />
  </StyledListPage>
);

export default RestaurantList;
