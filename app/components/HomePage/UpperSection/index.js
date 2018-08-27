import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SearchTypeContainer from 'containers/SearchTypeContainer';
import AppHeader from 'components/Header';

import StyledUpperSection from './StyledUpperSection';
import Subheader from './Subheader';
import Header from './Header';
import SearchBar from './SearchBar';
import FiltersWrapper from './FiltersWrapper';

import StyledSection from '../StyledSection';
import QuickFilters from './SearchTypes/QuickFilters';

const UpperSection = ({ location }) => (
  <StyledUpperSection>
    {location.pathname === '/' && <AppHeader />}
    <Subheader>Food Delivery From</Subheader>
    <Header>The Top Restaurants in Saudi Arabia</Header>
    <StyledSection>
      <SearchTypeContainer />
      <SearchBar />
    </StyledSection>
    <FiltersWrapper>
      <QuickFilters />
    </FiltersWrapper>
  </StyledUpperSection>
);

UpperSection.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default withRouter(UpperSection);
