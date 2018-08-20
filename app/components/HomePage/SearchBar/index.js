import React from 'react';

import Button from 'components/Button';

import StyledBar from './StyledBar';
import DropdownInput from './DropdownInput';
import LocateYourself from './LocateYourself';

const SearchBar = () => (
  <StyledBar>
    <DropdownInput placeholder="Enter city" />
    <DropdownInput placeholder="Enter District" />
    <div style={{ display: 'flex', marginRight: '10px' }}>
      <LocateYourself />
      <Button label="Search" border="right" width={144} />
    </div>
  </StyledBar>
);

export default SearchBar;
