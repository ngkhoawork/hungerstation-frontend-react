import React from 'react';

import OffersListContainer from 'containers/OffersListContainer';
import RestaurantsListContainer from 'containers/RestaurantsListContainer';
import Paragraph from 'components/Paragraph';
import StyledRestaurantsSection from './StyledRestaurantsSection';
import Section from './Section';
import RestaurantsHeader from './RestaurantsHeader';

const RestaurantsSection = () => (
  <StyledRestaurantsSection>
    <Section header={<Paragraph size={30}>Top offers</Paragraph>}>
      <OffersListContainer />
    </Section>
    <Section header={<RestaurantsHeader />}>
      <RestaurantsListContainer />
    </Section>
  </StyledRestaurantsSection>
);

export default RestaurantsSection;
