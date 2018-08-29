import React from 'react';

import OffersListContainer from 'containers/OffersListContainer';
import StyledRestaurantsSection from './StyledRestaurantsSection';
import Section from './Section';
import RestaurantsList from './RestaurantsList';

const RestaurantsSection = () => (
  <StyledRestaurantsSection>
    <Section title="Top offers">
      <OffersListContainer />
    </Section>
    <Section title="We found restaurants at">
      <RestaurantsList />
    </Section>
  </StyledRestaurantsSection>
);

export default RestaurantsSection;
