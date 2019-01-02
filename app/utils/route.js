import qs from 'query-string';
import createHistory from 'createHistory';

let history = createHistory;

export function setHistory(appHistoryObj) {
  history = appHistoryObj;
}


export function goBack() {
  history.goBack();
}

export function forwardTo(location) {
  history.push(location);
}

export function replace(location) {
  history.replace(location);
}

export function getQueryParams(location) {
  return qs.parse(location.search);
}

export function removeQueryParam(param, location = window.location) {
  const params = qs.parse(location.search);

  if (params[param] === undefined) return;

  delete params[param];
  const search = Object.keys(params).length ? `?${qs.stringify(params)}` : '';
  replace(`${location.pathname}${search}`);
}
