import React from 'react';

import Icon from 'components/Icon';
import StyledToolPanel from './StyledToolPanel';
import Dropdown from './Dropdown';
import StyledTool from './StyledTool';
import SearchInput from './SearchInput';

const ToolsPanel = () => {
  const options = [
    { id: 'pricehigh', label: 'Price High to Low' },
    { id: 'pricelow', label: 'Price Low to High' },
  ];
  return (
    <StyledToolPanel>
      <StyledTool>
        <Dropdown
          rightIcon="arrowdown"
          options={options}
          placeholder="Select sorting option"
          handleOptionSelect={option => {
            console.log('Selecting an option', option);
          }}
        />
      </StyledTool>
      <StyledTool>
        <Icon name="magnifying-glass" size={15} />
        <SearchInput />
      </StyledTool>
    </StyledToolPanel>
  );
};

export default ToolsPanel;
