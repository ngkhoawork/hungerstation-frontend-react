/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <input {...input} type={type} placeholder={label} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
