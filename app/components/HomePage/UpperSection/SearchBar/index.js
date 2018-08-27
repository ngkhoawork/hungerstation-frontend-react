import React from 'react';

import Button from 'components/Button';

import StyledBar from './StyledBar';
import DropdownInput from './DropdownInput';
import LocateYourself from './LocateYourself';
import StyledBarActions from './StyledBarActions';
import ButtonWrapper from './ButtonWrapper';

const SearchBar = () => (
  <StyledBar>
    <DropdownInput placeholder="Enter city" iconName="pin" />
    <DropdownInput placeholder="Enter District" iconName="district" />
    <StyledBarActions>
      <LocateYourself />
      <ButtonWrapper>
        <Button label="Search" border="right" />
      </ButtonWrapper>
    </StyledBarActions>
  </StyledBar>
);

export default SearchBar;
