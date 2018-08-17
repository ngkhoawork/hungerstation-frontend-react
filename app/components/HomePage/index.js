/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import SearchBarContainer from 'containers/SearchBarContainer';

import OptionsChoice from 'components/OptionsChoice';
import StyledPage from './StyledPage';
import Subheader from './Subheader';
import Header from './Header';
import QuickFilters from './QuickFilters';

const HomePage = ({ selectSearchType, selectedSearchType }) => {
  const options = [
    { id: 'delivery', name: 'Delivery' },
    { id: 'pickup', name: 'Pick up' },
  ];
  return (
    <StyledPage>
      <Subheader>Food Deliver From</Subheader>
      <Header>The Top Restaurants in Saudi Arabia</Header>
      <OptionsChoice
        options={options}
        onOptionSelect={selectSearchType}
        selectedOption={selectedSearchType}
      />
      <SearchBarContainer />
      <QuickFilters />
    </StyledPage>
  );
};

HomePage.propTypes = {
  selectSearchType: PropTypes.func.isRequired,
  selectedSearchType: PropTypes.string.isRequired,
};

export default HomePage;
