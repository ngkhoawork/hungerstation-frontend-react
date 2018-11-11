import createHistory from 'createHistory';

let history = createHistory;

export function setHistory(appHistoryObj) {
  history = appHistoryObj;
}

export function forwardTo(location) {
  history.push(location);
}

export function replace(location) {
  history.replace(location);
}
