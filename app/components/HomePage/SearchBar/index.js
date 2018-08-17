import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import StyledBar from './StyledBar';
import DropdownInput from './DropdownInput';
import LocateYourself from './LocateYourself';

const SearchBar = ({ getCurrentLocation, isSettlementLoaded }) => (
  <StyledBar>
    <DropdownInput iconName="location-pin" placeholder="Enter city" />
    <DropdownInput placeholder="Enter District" />
    <LocateYourself
      getCurrentLocation={getCurrentLocation}
      isSettlementLoaded={isSettlementLoaded}
    />
    <Button label="Search" border="right" />
  </StyledBar>
);

SearchBar.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
  isSettlementLoaded: PropTypes.bool.isRequired,
};

export default SearchBar;
