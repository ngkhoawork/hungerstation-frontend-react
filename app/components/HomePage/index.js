/**
 *
 * HomePage
 *
 */

import React from 'react';

// import { FormattedMessage } from 'react-intl';

import SearchTypeContainer from 'containers/SearchTypeContainer';
import StyledPage from './StyledPage';
import Subheader from './Subheader';
import Header from './Header';
import SearchBar from './SearchBar';
// import messages from './messages';

const HomePage = () => (
  <StyledPage>
    <Subheader>Food Deliver From</Subheader>
    <Header>The Top Restaurants in Saudi Arabia</Header>
    <SearchTypeContainer />
    <SearchBar />
  </StyledPage>
);

export default HomePage;
