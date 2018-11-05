import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

import { gold } from 'utils/css/colors';
import { flex } from 'utils/css/styles';
import FormControlLabel from './FormControlLabel';

const Checkbox = styled(MuiCheckbox)`
  color: ${gold} !important;
  width: 40px !important;
  height: 40px !important;

  span:first-child {
    ${flex({ justify: 'flex-start' }, false)};
  }
`;

const CheckboxSelect = ({
  name,
  max,
  options,
  checkedOptions,
  onChange,
  labelKey,
  valueKey,
}) => {
  const isChecked = option =>
    checkedOptions ? !!checkedOptions[option.id] : option.isChecked;

  const handleChange = (name, option) => {
    const checkedCount = options.filter(isChecked).length;

    if (max && !isChecked(option) && checkedCount >= max) return;

    onChange(name, option);
  };

  return (
    <FormGroup>
      {options.map(option => (
        <FormControlLabel
          key={option.id}
          label={option[labelKey] || option.label || option.name}
          control={
            <Checkbox
              value={option[valueKey] || option.value || option.id}
              checked={
                checkedOptions ? !!checkedOptions[option.id] : option.isChecked
              }
              onChange={() => handleChange(name, option)}
              disableRipple
            />
          }
        />
      ))}
    </FormGroup>
  );
};

CheckboxSelect.propTypes = {
  name: PropTypes.string.isRequired,
  max: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedOptions: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
};

export default CheckboxSelect;
