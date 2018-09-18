import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import StyledSelect from './StyledSelect';
import StyledOption from './StyledOption';

const Options = ({ onSelectOption, options }) => (
  <StyledSelect className="fadeIn">
    {options.map(option => (
      <StyledOption
        key={option.id || option.value}
        onClick={() => onSelectOption(option)}
      >
        <Paragraph light size={16}>
          {option.label}
        </Paragraph>
      </StyledOption>
    ))}
  </StyledSelect>
);

Options.propTypes = {
  onSelectOption: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Options;
