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

const CheckboxSelect = ({ name, options, onChange }) => (
  <FormGroup>
    {options.map(option => (
      <FormControlLabel
        key={option.value}
        label={option.label}
        control={
          <Checkbox
            value={`${option.value}`}
            checked={option.isChecked}
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      isChecked: PropTypes.bool,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxSelect;
