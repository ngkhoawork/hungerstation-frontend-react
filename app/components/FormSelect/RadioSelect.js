import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gold } from 'utils/css/colors';
import MuiRadio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from './FormControlLabel';

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
    value={`${value}`}
    onChange={({ target }) => onChange(name, target.value)}
  >
    {options.map(({ label, value }) => (
      <FormControlLabel
        key={label}
        label={label}
        value={`${value}`}
        control={<Radio disableRipple />}
      />
    ))}
  </RadioGroup>
);

RadioSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ),
  onChange: PropTypes.func.isRequired,
};

export default RadioSelect;
