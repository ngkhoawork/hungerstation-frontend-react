import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gold, fuscousGray, lightGray } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';
import { withStyles } from '@material-ui/core/styles';
import MuiRadio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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

const Radio = styled(MuiRadio)`
  color: ${gold} !important;
  width: 40px !important;
  height: 40px !important;

  span:first-child {
    justify-content: flex-start;
  }
`;

const RadioSelect = ({ name, options, value, onChange }) => (
  <RadioGroup
    aria-label={name}
    name={name}
    value={value}
    onChange={({ target }) => onChange(name, target.value)}
  >
    {options.map(({ label, value }) => (
      <FormControlLabel
        key={label}
        label={label}
        value={value}
        control={<Radio disableRipple />}
      />
    ))}
  </RadioGroup>
);

RadioSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ),
  onChange: PropTypes.func.isRequired,
};

export default RadioSelect;
