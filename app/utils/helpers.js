// TODO add intl support
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
        suggestion
          .get('name')
          .slice(0, inputLength)
          .toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
  }

  return [];
};

export const itemToString = item => (item ? item.get('name') : '');

export const slugify = string =>
  string
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s/g, '-');

export const shuffle = array => {
  const arr = [...array];
  let n = arr.length;
  let i;
  let tmp;

  while (n) {
    n -= 1;
    i = Math.floor(n * Math.random());
    tmp = arr[i];
    arr[i] = arr[n];
    arr[n] = tmp;
  }
  return arr;
};

export const sample = (array, size) => shuffle(array).slice(0, size);

export const sortAlphabetically = arr =>
  arr.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
