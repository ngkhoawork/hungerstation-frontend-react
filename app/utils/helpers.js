// TODO add intl support
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import deburr from 'lodash/deburr';

export const extractError = error => {
  let err;
  if (error.status === 500) {
    err = error.message;
  } else if (error.response) {
    [err] = error.response.errors;
  } else {
    err = 'Something went terribly wrong';
  }

  return err;
};

export const getSuggestions = (suggestions, value) => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  if (inputLength !== 0) {
    return suggestions.filter(suggestion => {
      const keep =
        count < 8 &&
        suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
  }

  return [];
};

export const renderSuggestion = ({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
}) => {
  const isHighlighted = highlightedIndex === index;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.name}
      selected={isHighlighted}
      component="div"
    >
      {suggestion.name}
    </MenuItem>
  );
};

export const renderInput = inputProps => {
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

export const itemToString = item => (item ? item.name : '');
