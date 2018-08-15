import React from 'react';

import Button from 'components/Button';

import StyledBar from './StyledBar';
import DropdownInput from './DropdownInput';
import LocateYourself from './LocateYourself';

const SearchBar = () => (
  <StyledBar>
    <DropdownInput iconName="location-pin" placeholder="Enter city" />
    <DropdownInput placeholder="Enter District" />
    <LocateYourself />
    <Button label="Search" />
  </StyledBar>
);

export default SearchBar;
