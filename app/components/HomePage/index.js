/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';

import OptionsChoice from 'components/OptionsChoice';
import StyledPage from './StyledPage';
import Subheader from './Subheader';
import Header from './Header';
import SearchBar from './SearchBar';
import QuickFilters from './QuickFilters';
// import messages from './messages';

const HomePage = ({
  selectSearchType,
  selectedSearchType,
  getCurrentLocation,
}) => {
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
      <SearchBar getCurrentLocation={getCurrentLocation} />
      <QuickFilters />
    </StyledPage>
  );
};

HomePage.propTypes = {
  selectSearchType: PropTypes.func.isRequired,
  selectedSearchType: PropTypes.string.isRequired,
  getCurrentLocation: PropTypes.func.isRequired,
};

export default HomePage;
