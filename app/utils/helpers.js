// TODO add intl support
import deburr from 'lodash/deburr';
import { List } from 'immutable';
import intl from 'utils/intlService';

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

  return List();
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

export function isChildOf(element, parentId) {
  let parent = element.parentElement;

  while (parent) {
    if (parent.id === parentId) return true;

    parent = parent.parentElement;
  }

  return false;
}

export function clearUndefs(obj) {
  const shallowCopy = { ...obj };
  Object.keys(shallowCopy).forEach(key => {
    if (shallowCopy[key] === undefined) delete shallowCopy[key];
  });

  return shallowCopy;
}

export const getDeepProp = (object = {}, props = []) => {
  let tempObj = object;
  props.forEach(prop => {
    tempObj = (tempObj || {})[prop];
  });

  return tempObj;
};

const weekdays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];
export function isDayTimeMatch({ working_time, working_times }) {
  const workingTime = working_time ? working_time.weektimes : working_times;

  if (!workingTime) return false;

  const { start_minute, end_minute } = workingTime[0];

  if (!start_minute || !end_minute) return false;

  const now = new Date();
  const time = now.getHours() * 60 + now.getMinutes();

  if (start_minute > time || end_minute < time) return false;

  return workingTime[0][weekdays[now.getDay()]];
}

export function daysUntilOpen(weektimes) {
  const now = new Date();
  const todayIndex = now.getDay();
  let firstDayIndex = todayIndex + 1;

  while (!weektimes[weekdays[firstDayIndex]]) firstDayIndex += 1;

  const daysDiff = (firstDayIndex - todayIndex + 7) % 7;

  return daysDiff;
}

export const getTime = minutes => {
  const date = new Date();
  date.setHours(Math.floor(minutes / 60), minutes % 60);

  return intl.formatTime(date);
};

export const getOrderDescription = order =>
  `${order.count || 1} x ${order.menuitem.name}`;

export const formatMobileNumber = phone => {
  const regex = /^(05|\+9665|009665)(\d+)$/;
  return phone.replace(regex, (match, p1, p2) => `+9665${p2}`);
};

export const compareByState = (a, b) => {
  if (a.state === b.state) {
    return 0;
  }
  if (
    a.state === 'processing' ||
    (a.state === 'successful' && b.state === 'failed')
  ) {
    return -1;
  }
  return 1;
};

export const calcWidth = (text, font) => {
  const canvas =
    calcWidth.canvas || (calcWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};
