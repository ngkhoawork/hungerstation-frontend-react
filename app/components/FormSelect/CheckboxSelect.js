import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gold } from 'utils/css/colors';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from './FormControlLabel';

const Checkbox = styled(MuiCheckbox)`
  color: ${gold} !important;
  width: 40px !important;
  height: 40px !important;

  span:first-child {
    justify-content: flex-start;
  }
`;

const CheckboxSelect = ({
  name,
  options,
  checkedOptions,
  onChange,
  labelKey,
  valueKey,
}) => (
  <FormGroup>
    {options.map(option => (
      <FormControlLabel
        key={option.id}
        label={option[labelKey] || option.label || option.name}
        control={
          <Checkbox
            value={option[valueKey] || option.value || option.id}
            checked={
              checkedOptions ? checkedOptions[option.id] : option.isChecked
            }
            onChange={() => onChange(name, option)}
            disableRipple
          />
        }
      />
    ))}
  </FormGroup>
);

CheckboxSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedOptions: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
};

export default CheckboxSelect;
