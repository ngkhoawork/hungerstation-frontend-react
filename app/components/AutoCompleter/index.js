import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import { fontFamilyLight } from 'utils/css/variables';
import { wildSand } from 'utils/css/colors';
import { itemToString, getSuggestions, calcWidth } from 'utils/helpers';

import Input from './Input';
import Suggestion from './Suggestion';

const Autocomplete = props => {
  const {
    classes,
    suggestions,
    onChange,
    selectedItem: item,
    icon,
    disabled,
    enableAutoComplete,
    autoCompleteTextOffset,
  } = props;

  const stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.changeInput:
        return {
          ...changes,
          highlightedIndex: 0,
        };
      default:
        return changes;
    }
  };

  return (
    <Downshift
      onChange={onChange}
      itemToString={itemToString}
      selectedItem={item}
      stateReducer={stateReducer}
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
        const suggestion = renderedSuggestions.get(highlightedIndex)
          ? renderedSuggestions.get(highlightedIndex).get('name')
          : '';
        const space = ' ';
        const placeholder =
          space.repeat(inputValue.length) + suggestion.slice(inputValue.length);
        const offsetX =
          autoCompleteTextOffset +
          calcWidth(inputValue, `16px ${fontFamilyLight}`);
        return (
          <div className={[classes.container]}>
            {enableAutoComplete && (
              <span
                className={classes.backgroundSuggestion}
                style={{ marginLeft: `${offsetX}px` }}
              >
                {placeholder}
              </span>
            )}
            <Input
              fullWidth
              classes={{
                root: classes.formControlRoot,
              }}
              defaultValue={defaultInputValue}
              InputProps={getInputProps({
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
                  <InputAdornment className={classes.icon} position="start">
                    <CircledItem color={wildSand} width={28}>
                      <Icon name={icon} />
                    </CircledItem>
                  </InputAdornment>
                ),
              })}
            />
            <div {...getMenuProps()}>
              {isOpen && renderedSuggestions.size ? (
                <Paper className={classes.paper}>
                  {renderedSuggestions.map((suggestion, index) => (
                    <Suggestion
                      suggestion={suggestion}
                      index={index}
                      key={suggestion.get('name')}
                      itemProps={getItemProps({
                        item: suggestion,
                        classes: {
                          root: classes.menuItem,
                          selected: classes.menuItemSelected,
                        },
                      })}
                      highlightedIndex={highlightedIndex}
                      selectedItem={selectedItem}
                    />
                  ))}
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
  autoCompleteTextOffset: PropTypes.number,
  enableAutoComplete: PropTypes.bool,
};

Autocomplete.defaultProps = {
  autoCompleteTextOffset: 51,
  enableAutoComplete: false,
};

export default Autocomplete;
