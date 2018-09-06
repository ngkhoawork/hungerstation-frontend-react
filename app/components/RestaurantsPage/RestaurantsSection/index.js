import React from 'react';

import OffersListContainer from 'containers/OffersListContainer';
import FiltersContainer from 'containers/FiltersContainer';
import RestaurantsListContainer from 'containers/RestaurantsListContainer';
import Paragraph from 'components/Paragraph';
import StyledRestaurantsSection from './StyledRestaurantsSection';
import Section from './Section';
import RestaurantsHeader from './RestaurantsHeader';
import MobileFiltersSection from '../MobileFiltersSection';

const RestaurantsSection = () => (
  <StyledRestaurantsSection>
    <Section header={<Paragraph size={30}>Top offers</Paragraph>}>
      <OffersListContainer />
    </Section>
    <Section header={<RestaurantsHeader />}>
      <FiltersContainer>
        {props => <MobileFiltersSection {...props} />}
      </FiltersContainer>
      <RestaurantsListContainer />
    </Section>
  </StyledRestaurantsSection>
);

export default RestaurantsSection;
