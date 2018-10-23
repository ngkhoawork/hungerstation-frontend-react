import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gold, fuscousGray, lightGray } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';
import { withStyles } from '@material-ui/core/styles';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';

const FormControlLabel = withStyles({
  root: {
    borderBottom: `solid 1px ${lightGray}`,
  },
  label: {
    color: `${fuscousGray}`,
    fontFamily: `${fontFamilyRegular}`,
    paddingTop: '3px',
  },
})(MuiFormControlLabel);

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
            value={option.value}
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
