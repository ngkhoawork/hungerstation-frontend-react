import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledDropdown from './StyledDropdown';
import Placeholder from './Placeholder';

const DropdownInput = ({ iconName, placeholder, value }) => (
  <StyledDropdown>
    {iconName && <Icon name={iconName} circled />}
    {value || <Placeholder>{placeholder}</Placeholder>}
  </StyledDropdown>
);

DropdownInput.propTypes = {
  iconName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default DropdownInput;
