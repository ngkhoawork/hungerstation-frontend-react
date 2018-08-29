import React from 'react';

import Button from 'components/Button';

import StyledBar from './StyledBar';
import DropdownInput from './DropdownInput';
import LocateYourself from './LocateYourself';
import StyledBarActions from './StyledBarActions';
import ButtonWrapper from './ButtonWrapper';

const SearchBar = ({ selectedCity, selectedDistrict, ...rest }) => (
  <StyledBar>
    <DropdownInput
      value={selectedCity}
      placeholder="Enter city"
      iconName="pin"
    />
    <DropdownInput
      value={selectedDistrict}
      placeholder="Enter District"
      iconName="district"
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
