/**
 *
 * PhoneNumberInput
 *
 */

import React from 'react';
import styled from 'styled-components';

import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import { flexBox } from 'utils/styles';

import Icon from 'components/Icon';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Wrapper = styled.div`
  ${flexBox(
    { align: 'flex-start' },
    `
      margin-top: 16px;
      margin-bottom: 8px;

      > div.prefix {
        margin-right: 16px;
      }

      [dir="rtl"] & > div.prefix {
        margin-left: 16px;
      }

      > div.input {
        flex-grow: 1;

      }
    `,
  )};
`;

const countriesArr = [
  [
    'sa',
    {
      label: '+966',
      icon: 'saudi-flag',
    },
  ],
  [
    'ba',
    {
      label: '+973',
      icon: 'bahrain-flag',
    },
  ],
];

const countriesMap = new Map(countriesArr);

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
      <Wrapper>
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
            {countriesArr.map(option => (
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
      </Wrapper>
    );
  }
}

PhoneNumberInput.propTypes = {};

export default PhoneNumberInput;
