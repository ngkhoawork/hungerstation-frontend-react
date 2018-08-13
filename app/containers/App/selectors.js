import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const selectAuth = state => state.get('auth');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export const makeSelectIsLoggedIn = createSelector(selectAuth, authState => {
  const output = authState && authState.get('loggedIn');

  if (output) {
    return output;
  }

  return null;
});

export const makeSelectTokens = createSelector(selectAuth, authState => {
  const output = authState && authState.get('tokens');

  if (output) {
    return output.toJS();
  }

  return null;
});

export { makeSelectLocation };
