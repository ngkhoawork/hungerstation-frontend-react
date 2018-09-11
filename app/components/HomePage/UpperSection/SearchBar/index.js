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
  ...rest
}) => (
  <StyledBar>
    <DropdownInput
      placeholder="Enter city"
      iconName="pin"
      suggestions={cities && cities.toJS()}
      onChange={selectCity}
    />
    <DropdownInput
      placeholder="Enter District"
      iconName="district"
      suggestions={districts && districts.toJS()}
      onChange={selectDistrict}
      selectedItem={selectedDistrict && selectedDistrict.toJS()}
    />
    <StyledBarActions>
      <LocateYourself {...rest} />
      <ButtonWrapper>
        <Button label="Search" border="right" />
      </ButtonWrapper>
    </StyledBarActions>
  </StyledBar>
);

export default SearchBar;
