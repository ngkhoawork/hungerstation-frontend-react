import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

export default ({ suggestion, index, itemProps, highlightedIndex }) => {
  const isHighlighted = highlightedIndex === index;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.get('name')}
      selected={isHighlighted}
      component="div"
    >
      {suggestion.get('name')}
    </MenuItem>
  );
};
