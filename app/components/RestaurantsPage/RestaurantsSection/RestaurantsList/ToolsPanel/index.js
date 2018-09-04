import React from 'react';

import StyledToolPanel from './StyledToolPanel';
import Dropdown from './Dropdown';

const ToolsPanel = () => {
  const options = [
    { id: 'pricehigh', label: 'Price High to Low' },
    { id: 'pricelow', label: 'Price Low to High' },
  ];
  return (
    <StyledToolPanel>
      <Dropdown
        rightIcon="arrowdown"
        options={options}
        placeholder="Select sorting option"
        handleOptionSelect={option => {
          console.log('Selecting an option', option);
        }}
      />
    </StyledToolPanel>
  );
};

export default ToolsPanel;
