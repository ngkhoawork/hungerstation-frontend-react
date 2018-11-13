import React from 'react';
import { withRouter } from 'react-router-dom';

// import SearchTypeContainer from 'containers/SearchTypeContainer';
import SearchBarContainer from 'containers/SearchBarContainer';
import AppHeader from 'containers/AppHeader';

import StyledUpperSection from './StyledUpperSection';
import Subheader from './Subheader';
import Header from './Header';
import FiltersWrapper from './FiltersWrapper';

import StyledSection from '../StyledSection';
import QuickFilters from './SearchTypes/QuickFilters';

const UpperSection = () => (
  <StyledUpperSection>
    <AppHeader />
    <Subheader>Food Delivery From</Subheader>
    <Header>The Top Restaurants in Saudi Arabia</Header>
    <StyledSection>
      {/* <SearchTypeContainer /> */}
      <SearchBarContainer />
    </StyledSection>
    <FiltersWrapper>
      <QuickFilters />
    </FiltersWrapper>
  </StyledUpperSection>
);

export default withRouter(UpperSection);
