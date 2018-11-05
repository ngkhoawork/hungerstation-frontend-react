import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuiRadio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { gold } from 'utils/css/colors';
import { flex } from 'utils/css/styles';
import CheckBoxIcon from 'components/CheckboxIcon';
import Icon from 'components/Icon';
import FormControlLabel from './FormControlLabel';

const Radio = styled(MuiRadio)`
  color: ${gold} !important;
  width: 40px !important;
  height: 40px !important;

  span:first-child {
    ${flex({ justify: 'flex-start' }, false)};
  }
`;

const RadioSelect = ({
  name,
  options,
  value,
  onChange,
  labelKey,
  valueKey,
}) => {
  const handleChange = ({ target }) => {
    const option = options.find(({ id }) => id === target.value);
    onChange(name, option);
  };

  return (
    <RadioGroup
      aria-label={name}
      name={name}
      value={value}
      onChange={handleChange}
    >
      {options.map(option => (
        <FormControlLabel
          key={option.id}
          label={option[labelKey] || option.label || option.name}
          value={option[valueKey] || option.value || option.id}
          control={
            <Radio
              disableRipple
              icon={<CheckBoxIcon />}
              checkedIcon={<Icon name="radio" size={20} />}
            />
          }
        />
      ))}
    </RadioGroup>
  );
};

RadioSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
};

export default RadioSelect;
