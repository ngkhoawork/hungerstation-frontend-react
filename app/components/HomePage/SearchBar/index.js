import React from 'react';

import Button from 'components/Button';
import LocateYourselfContainer from 'containers/LocateYourselfContainer';
import StyledBar from './StyledBar';
import DropdownInput from './DropdownInput';

const SearchBar = () => (
  <StyledBar>
    <DropdownInput iconName="location-pin" placeholder="Enter city" />
    <DropdownInput placeholder="Enter District" />
    <LocateYourselfContainer />
    <Button label="Search" border="right" />
  </StyledBar>
);

SearchBar.propTypes = {};

export default SearchBar;
