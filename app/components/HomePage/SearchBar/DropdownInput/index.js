import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledDropdown from './StyledDropdown';
import Placeholder from './Placeholder';

const DropdownInput = ({ placeholder }) => (
  <StyledDropdown>
    <Icon name="location-pin" size={17} circled />
    <Placeholder>{placeholder}</Placeholder>
  </StyledDropdown>
);

DropdownInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default DropdownInput;
