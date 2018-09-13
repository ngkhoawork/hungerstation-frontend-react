import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from 'components/Icon';

import {
  itemToString,
  getSuggestions,
  renderSuggestion,
  renderInput,
} from 'utils/helpers';

const styles = () => ({
  root: {
    flexGrow: 1,
    marginLeft: '16px',
  },
  formControlRoot: {
    '@media (min-width: 850px)': {
      marginLeft: '16px',
    },
  },
  input: {
    padding: '3px 0 0 0',
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 101,
    left: 0,
    right: 0,
    paddingTop: '46px',
    marginTop: '-40px',
    borderRadius: '8px',
    '@media (max-width: 850px)': {
      left: '-20px',
      right: '-20px',
    },
  },
  focusedInput: {
    zIndex: 200,
  },
  inputRoot: {
    fontFamily: `'HungerStation-Light', sans-serif`,
    flexWrap: 'wrap',
    margin: '0 8px',
  },
  menuItemRoot: {
    fontFamily: `'HungerStation-Regular', sans-serif`,
  },
});

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
              classes,
              defaultValue: defaultInputValue,
              InputProps: getInputProps({
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
                    <div>
                      <Icon name={icon} />
                    </div>
                  </InputAdornment>
                ),
              }),
            })}
            <div {...getMenuProps()}>
              {isOpen && renderedSuggestions.length ? (
                <Paper className={classes.paper}>
                  {renderedSuggestions.map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({
                        item: suggestion,
                        classes: { root: classes.menuItemRoot },
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

export default withStyles(styles)(Autocomplete);
