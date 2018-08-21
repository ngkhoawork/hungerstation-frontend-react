/**
 *
 * HomePage
 *
 */

import React from 'react';

import SearchTypeContainer from 'containers/SearchTypeContainer';
import StyledPage from './StyledPage';
import Subheader from './Subheader';
import Header from './Header';
import SearchBar from './SearchBar';
import WhyHS from './WhyHS';
import HowItWorks from './HowItWorks';
import StyledSection from './StyledSection';

const HomePage = () => (
  <StyledPage>
    <Subheader>Food Deliver From</Subheader>
    <Header>The Top Restaurants in Saudi Arabia</Header>
    <StyledSection>
      <SearchTypeContainer />
      <SearchBar />
      <WhyHS />
    </StyledSection>
    <HowItWorks />
  </StyledPage>
);

export default HomePage;
