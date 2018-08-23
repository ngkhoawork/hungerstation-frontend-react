import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import LocateYourself from './LocateYourself';
import StyledBar from './StyledBar';
import DropdownInput from './DropdownInput';

const SearchBar = ({
  getCurrentLocation,
  isSettlementLoaded,
  selectedCity,
  selectedDistrict,
}) => (
  <StyledBar>
    <DropdownInput
      iconName="location-pin"
      placeholder="Enter city"
      value={selectedCity}
    />
    <DropdownInput placeholder="Enter District" value={selectedDistrict} />
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
  selectedCity: PropTypes.string,
  selectedDistrict: PropTypes.string,
};

export default SearchBar;
