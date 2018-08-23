import React from 'react';

import Button from 'components/Button';

import StyledBar from './StyledBar';
import DropdownInput from './DropdownInput';
import LocateYourself from './LocateYourself';
import StyledBarActions from './StyledBarActions';

const SearchBar = () => (
  <StyledBar>
    <DropdownInput placeholder="Enter city" iconName="pin" />
    <DropdownInput placeholder="Enter District" iconName="district" />
    <StyledBarActions>
      <LocateYourself />
      <Button label="Search" border="right" />
    </StyledBarActions>
  </StyledBar>
);

export default SearchBar;
