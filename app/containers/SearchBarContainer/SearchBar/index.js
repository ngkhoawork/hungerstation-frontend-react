import React from 'react';

import Button from 'components/Button';

import DropdownInput from './DropdownInput';
import LocateYourself from './LocateYourself';
import * as Styled from './StyledComponents';

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
  <Styled.Bar>
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
    <Styled.BarActions>
      <LocateYourself {...rest} />
      <Styled.ButtonWrapper onClick={() => handleRedirect('/restaurants')}>
        <Button label="Search" border="right" />
      </Styled.ButtonWrapper>
    </Styled.BarActions>
  </Styled.Bar>
);

export default SearchBar;
