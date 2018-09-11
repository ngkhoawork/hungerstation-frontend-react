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
        count < 8 && suggestion.name.toLowerCase().includes(inputValue);

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
  selectedItem,
}) => {
  const isHighlighted = highlightedIndex === index;
  const isSelected =
    ((selectedItem && selectedItem.name) || '').indexOf(suggestion.name) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.name}
      selected={isHighlighted}
      component="div"
      style={{
        fontFamily: isSelected
          ? 'HungerStation-Regular'
          : 'HungerStation-Light',
      }}
    >
      {suggestion.name}
    </MenuItem>
  );
};

export const renderInput = inputProps => {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.input,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
};

export const itemToString = item => (item ? item.name : '');
