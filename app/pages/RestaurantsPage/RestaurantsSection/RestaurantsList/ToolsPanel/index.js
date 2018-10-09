import React from 'react';

import Icon from 'components/Icon';
import intl from 'utils/intlService';
import StyledToolPanel from './StyledToolPanel';
import Dropdown from './Dropdown';
import StyledTool from './StyledTool';
import SearchInput from './SearchInput';
import messages from './messages';

const ToolsPanel = () => {
  const options = [
    { id: 'pricehigh', label: intl.formatMessage(messages.pricehigh) },
    { id: 'pricelow', label: intl.formatMessage(messages.pricelow) },
  ];
  return (
    <StyledToolPanel>
      <StyledTool>
        <Dropdown
          rightIcon="arrowdown"
          options={options}
          placeholder={intl.formatMessage(messages.select)}
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
