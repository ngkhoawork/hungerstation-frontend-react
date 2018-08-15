import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledDropdown from './StyledDropdown';
import Placeholder from './Placeholder';

const DropdownInput = ({ iconName, placeholder }) => (
  <StyledDropdown>
    {iconName && <Icon name={iconName} />}
    <Placeholder>{placeholder}</Placeholder>
    <Icon name="arrow-down" size={12} />
  </StyledDropdown>
);

DropdownInput.propTypes = {
  iconName: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default DropdownInput;
