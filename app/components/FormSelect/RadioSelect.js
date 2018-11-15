import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuiRadio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import intl, { priceIntlOptions } from 'utils/intlService';
import { flex } from 'utils/css/styles';
import CheckBoxIcon from 'components/CheckboxIcon';
import Icon from 'components/Icon';
import { getLabelKey, getValueKey } from './helpers';
import { StyledFormControlLabel, Label, Price } from './StyledComponents';

const Radio = styled(MuiRadio)`
  width: 40px !important;
  height: 40px !important;

  span:first-child {
    ${flex({ justify: 'flex-start' }, false)};
  }
`;

const RadioSelect = ({ name, options, value, onChange, ...props }) => {
  const handleChange = ({ target }) => {
    const option = options.find(({ id }) => id === target.value);
    onChange(name, option);
  };

  const labelKey = getLabelKey(options, props);
  const valueKey = getValueKey(options, props);

  return (
    <RadioGroup
      aria-label={name}
      name={name}
      value={value}
      onChange={handleChange}
    >
      {options.map(option => (
        <StyledFormControlLabel
          key={option.id}
          label={
            <Label isSelected={value === option[valueKey]}>
              {option[labelKey]}
              {option.price ? (
                <Price>
                  +{intl.formatNumber(option.price, priceIntlOptions)}
                </Price>
              ) : null}
            </Label>
          }
          value={option[valueKey]}
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
