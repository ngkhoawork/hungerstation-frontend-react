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
    error={!!touched[field.name] && !!errors[field.name]}
    helperText={!!touched[field.name] && errors[field.name]}
    {...field}
    {...custom}
  />
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
