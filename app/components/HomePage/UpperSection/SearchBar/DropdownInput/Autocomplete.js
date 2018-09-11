import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import {
  itemToString,
  getSuggestions,
  renderSuggestion,
  renderInput,
} from 'utils/helpers';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  input: {
    padding: '6px 0 0 0',
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 101,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  inputRoot: {
    fontFamily: `'HungerStation-Light', sans-serif`,
    flexWrap: 'wrap',
    margin: '0 8px',
  },
});

const Autocomplete = props => {
  const {
    classes,
    placeholder,
    suggestions,
    onChange,
    selectedItem: item,
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
      }) => (
        <div className={classes.container}>
          {renderInput({
            fullWidth: true,
            classes,
            defaultValue: defaultInputValue,
            InputProps: getInputProps({
              placeholder,
              disableUnderline: true,
              onChange: e => {
                if (e.target.value === '') {
                  clearSelection();
                }
              },
            }),
          })}
          <div {...getMenuProps()}>
            {isOpen ? (
              <Paper className={classes.paper}>
                {getSuggestions(suggestions, inputValue).map(
                  (suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion }),
                      highlightedIndex,
                      selectedItem,
                    }),
                )}
              </Paper>
            ) : null}
          </div>
        </div>
      )}
    </Downshift>
  );
};

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Autocomplete);
