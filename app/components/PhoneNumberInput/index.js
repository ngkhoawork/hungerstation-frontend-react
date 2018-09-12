/**
 *
 * PhoneNumberInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import countryCodes from 'utils/countryCodes';

import Icon from 'components/Icon';

import StyledWrapper from './StyledWrapper';

const countriesMap = new Map(countryCodes);

/* eslint-disable react/prefer-stateless-function */
class PhoneNumberInput extends React.PureComponent {
  state = {
    prefix: 'sa',
    phone: '',
  };

  handleChange = type => e => {
    const {
      form: { setFieldValue },
    } = this.props;

    this.setState(
      {
        [type]: e.target.value,
      },
      () => {
        const { prefix, phone } = this.state;
        if (type === 'phone') {
          setFieldValue('phone', `${phone}`);
          setFieldValue('mobile', `${countriesMap.get(prefix).label}${phone}`);
        }
      },
    );
  };

  render() {
    const {
      field,
      form: { errors },
      ...rest
    } = this.props;
    const { prefix, phone } = this.state;

    return (
      <StyledWrapper>
        <div className="prefix">
          <TextField
            label=" "
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <div style={{ marginTop: '-4px' }}>
                    <Icon name={countriesMap.get(prefix).icon} size={18} />
                  </div>
                </InputAdornment>
              ),
            }}
            id="select-currency-native"
            select
            SelectProps={{
              native: true,
            }}
            value={prefix}
            onChange={this.handleChange('prefix')}
          >
            {countryCodes.map(option => (
              <option key={option[0]} value={option[0]}>
                {option[1].label}
              </option>
            ))}
          </TextField>
        </div>
        <div className="input">
          <TextField
            error={!!errors.phone}
            fullWidth
            name="phone"
            {...rest}
            value={phone}
            onChange={this.handleChange('phone')}
          />
          {!!errors.phone && (
            <FormHelperText error>{errors.phone}</FormHelperText>
          )}
        </div>
      </StyledWrapper>
    );
  }
}

PhoneNumberInput.propTypes = {
  field: PropTypes.object.isRequired,
  errors: PropTypes.shape({
    phone: PropTypes.string,
  }),
};

export default PhoneNumberInput;
