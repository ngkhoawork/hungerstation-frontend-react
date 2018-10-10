import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { withStyles } from '@material-ui/core/styles';
import Autocompleter from 'components/Autocompleter';

import styles from './styles';
import StyledDropdown from './StyledDropdown';

const HomePageAutocomplete = withStyles(styles)(Autocompleter);

const DropdownInput = ({
  iconName,
  placeholder,
  value,
  suggestions,
  onChange,
  ...rest
}) => (
  <StyledDropdown>
    <HomePageAutocomplete
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
  suggestions: ImmutablePropTypes.list.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DropdownInput;
