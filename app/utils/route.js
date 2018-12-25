import createHistory from 'createHistory';

let history = createHistory;

export function setHistory(appHistoryObj) {
  history = appHistoryObj;
}

export function forwardTo(location, state) {
  history.push(location, state);
}

export function replace(location) {
  history.replace(location);
}
