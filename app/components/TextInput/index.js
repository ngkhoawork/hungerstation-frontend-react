/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ field, form: { touched, errors }, ...custom }) => (
  <TextField
    error={touched && !!errors[field.name]}
    helperText={touched && errors[field.name]}
    margin="normal"
    {...field}
    {...custom}
  />
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
