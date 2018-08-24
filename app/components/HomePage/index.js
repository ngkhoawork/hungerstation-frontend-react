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
import WhyHSSection from './WhyHSSection';
import HowItWorksSection from './HowItWorksSection';
import MobileAppSection from './MobileAppSection';
import StyledSection from './StyledSection';
import BusinessSection from './BusinessSection';

const HomePage = () => (
  <StyledPage>
    <Subheader>Food Delivery From</Subheader>
    <Header>The Top Restaurants in Saudi Arabia</Header>
    <StyledSection>
      <SearchTypeContainer />
      <SearchBar />
    </StyledSection>
    <WhyHSSection />
    <HowItWorksSection />
    <MobileAppSection />
    <BusinessSection />
  </StyledPage>
);

export default HomePage;
