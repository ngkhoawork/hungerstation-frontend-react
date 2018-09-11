import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
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
    {iconName && <Icon name={iconName} />}
    <Autocomplete
      placeholder={placeholder}
      suggestions={suggestions}
      onChange={onChange}
      value={value}
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
