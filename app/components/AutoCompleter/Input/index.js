import React from 'react';
import TextField from '@material-ui/core/TextField';

export default inputProps => {
  const { InputProps, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        ...InputProps,
      }}
      {...other}
    />
  );
};
