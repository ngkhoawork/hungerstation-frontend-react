import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import intl, { priceIntlOptions } from 'utils/intlService';
import { flex } from 'utils/css/styles';
import CheckBoxIcon from 'components/CheckboxIcon';
import { getLabelKey, getValueKey } from './helpers';
import { StyledFormControlLabel, Label, Price } from './StyledComponents';

const Checkbox = styled(MuiCheckbox)`
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
  ...props
}) => {
  const isChecked = option =>
    checkedOptions ? !!checkedOptions[option.id] : option.isChecked;

  const handleChange = (name, option) => {
    const checkedCount = options.filter(isChecked).length;

    if (max && !isChecked(option) && checkedCount >= max) return;

    onChange(name, option);
  };

  const labelKey = getLabelKey(options, props);
  const valueKey = getValueKey(options, props);
  const isLabelKeyFunc = typeof props.labelKey === 'function';

  return (
    <FormGroup>
      {options.map(option => (
        <StyledFormControlLabel
          key={option.id}
          label={
            <Label isSelected={isChecked(option)}>
              {isLabelKeyFunc ? props.labelKey(option) : option[labelKey]}
              {option.price ? (
                <Price>
                  +{intl.formatNumber(option.price, priceIntlOptions)}
                </Price>
              ) : null}
            </Label>
          }
          control={
            <Checkbox
              value={option[valueKey]}
              checked={isChecked(option)}
              onChange={() => handleChange(name, option)}
              disableRipple
              icon={<CheckBoxIcon />}
              checkedIcon={<CheckBoxIcon isChecked />}
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
  labelKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  valueKey: PropTypes.string,
};

export default CheckboxSelect;
