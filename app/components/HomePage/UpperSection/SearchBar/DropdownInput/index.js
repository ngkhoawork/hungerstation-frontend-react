import React from 'react';
import PropTypes from 'prop-types';

import StyledDropdown from './StyledDropdown';
import Autocomplete from './Autocomplete';

const DropdownInput = ({
  iconName,
  placeholder,
  value,
  suggestions,
  onChange,
  ...rest
}) => (
  <StyledDropdown>
    <Autocomplete
      placeholder={placeholder}
      suggestions={suggestions}
      onChange={onChange}
      value={value}
      icon={iconName}
      {...rest}
    />
  </StyledDropdown>
);

DropdownInput.propTypes = {
  iconName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  suggestions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DropdownInput;
