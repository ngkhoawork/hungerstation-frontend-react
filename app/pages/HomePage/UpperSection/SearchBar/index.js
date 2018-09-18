import React from 'react';

import Button from 'components/Button';

import StyledBar from './StyledBar';
import DropdownInput from './DropdownInput';
import LocateYourself from './LocateYourself';
import StyledBarActions from './StyledBarActions';
import ButtonWrapper from './ButtonWrapper';

const SearchBar = ({
  selectedCity,
  cities,
  districts,
  selectCity,
  selectDistrict,
  selectedDistrict,
  handleRedirect,
  ...rest
}) => (
  <StyledBar>
    <DropdownInput
      placeholder="Enter city"
      iconName="pin"
      suggestions={cities}
      onChange={selectCity}
      selectedItem={selectedCity}
    />
    <DropdownInput
      placeholder="Enter District"
      iconName="district"
      suggestions={districts}
      onChange={selectDistrict}
      selectedItem={selectedDistrict}
      disabled={!selectedCity}
    />
    <StyledBarActions>
      <LocateYourself {...rest} />
      <ButtonWrapper onClick={() => handleRedirect('/restaurants')}>
        <Button label="Search" border="right" />
      </ButtonWrapper>
    </StyledBarActions>
  </StyledBar>
);

export default SearchBar;
