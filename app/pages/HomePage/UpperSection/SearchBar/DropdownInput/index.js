import React from 'react';
import PropTypes from 'prop-types';
import { wildSant } from 'utils/colors';

import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import StyledDropdown from './StyledDropdown';
import Placeholder from './Placeholder';

const DropdownInput = ({ iconName, placeholder, value }) => (
  <StyledDropdown>
    {iconName && (
      <CircledItem color={wildSant} width={28}>
        <Icon name={iconName} />
      </CircledItem>
    )}
    {value || <Placeholder>{placeholder}</Placeholder>}
  </StyledDropdown>
);

DropdownInput.propTypes = {
  iconName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default DropdownInput;
