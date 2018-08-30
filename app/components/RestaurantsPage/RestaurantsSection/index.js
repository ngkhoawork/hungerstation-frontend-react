import React from 'react';

import OffersListContainer from 'containers/OffersListContainer';
import RestaurantsListContainer from 'containers/RestaurantsListContainer';
import StyledRestaurantsSection from './StyledRestaurantsSection';
import Section from './Section';

const RestaurantsSection = () => (
  <StyledRestaurantsSection>
    <Section title="Top offers">
      <OffersListContainer />
    </Section>
    <Section title="We found restaurants at">
      <RestaurantsListContainer />
    </Section>
  </StyledRestaurantsSection>
);

export default RestaurantsSection;
