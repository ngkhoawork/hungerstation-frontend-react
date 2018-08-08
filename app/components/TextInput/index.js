/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ input, meta: { touched, error, warning }, ...custom }) => (
  <TextField
    error={touched && error}
    helperText={touched && error}
    margin="normal"
    {...input}
    {...custom}
  />
  /* <div>
    <input {...input} type={type} placeholder={label} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  */
);

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
