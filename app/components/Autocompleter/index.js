import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import { wildSant } from 'utils/colors';

import {
  itemToString,
  getSuggestions,
  renderSuggestion,
  renderInput,
} from 'utils/helpers';

const Autocomplete = props => {
  const {
    classes,
    placeholder,
    suggestions,
    onChange,
    selectedItem: item,
    icon,
    disabled,
  } = props;

  return (
    <Downshift
      onChange={onChange}
      itemToString={itemToString}
      selectedItem={item}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem,
        clearSelection,
        defaultInputValue,
      }) => {
        const renderedSuggestions = getSuggestions(suggestions, inputValue);

        return (
          <div className={[classes.container]}>
            {renderInput({
              fullWidth: true,
              classes: {
                root: classes.formControlRoot,
              },
              defaultValue: defaultInputValue,
              InputProps: getInputProps({
                classes: {
                  root: classes.inputRoot,
                  input: classes.input,
                  focused: classes.focusedInput,
                },
                disabled,
                placeholder,
                disableUnderline: true,
                onChange: e => {
                  if (e.target.value === '') {
                    clearSelection();
                  }
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <CircledItem color={wildSant} width={28}>
                      <Icon name={icon} />
                    </CircledItem>
                  </InputAdornment>
                ),
              }),
            })}
            <div {...getMenuProps()}>
              {isOpen && renderedSuggestions.size ? (
                <Paper className={classes.paper}>
                  {renderedSuggestions.map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({
                        item: suggestion,
                        classes: {
                          root: classes.menuItem,
                          selected: classes.menuItemSelected,
                        },
                      }),
                      highlightedIndex,
                      selectedItem,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          </div>
        );
      }}
    </Downshift>
  );
};

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Autocomplete;
