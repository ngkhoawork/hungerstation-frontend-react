import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const selectAuth = state => state.get('auth');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export const selectIsLoggedIn = createSelector(selectAuth, authState => {
  const output = authState && authState.get('loggedIn');

  if (output) {
    return output;
  }

  return null;
});

export { makeSelectLocation };
