import React from 'react';
import PropTypes from 'prop-types';

import StyledAutocomplete from './StyledAutocomplete';
import StyledDropdown from './StyledDropdown';

const DropdownInput = ({
  iconName,
  placeholder,
  value,
  suggestions,
  onChange,
  ...rest
}) => (
  <StyledDropdown>
    <StyledAutocomplete
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
