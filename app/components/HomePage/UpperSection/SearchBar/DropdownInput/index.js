import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledDropdown from './StyledDropdown';
import Placeholder from './Placeholder';

const DropdownInput = ({ placeholder, iconName }) => (
  <StyledDropdown>
    <Icon name={iconName} />
    <Placeholder>{placeholder}</Placeholder>
  </StyledDropdown>
);

DropdownInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default DropdownInput;
