import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const selectAuth = state => state.get('auth');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location'));

export const makeSelectIsLoggedIn = createSelector(
  selectAuth,
  authState => authState && authState.get('loggedIn', false),
);

export const makeSelectCurrentUser = createSelector(
  selectAuth,
  authState =>
    authState && authState.get('currentUser')
      ? authState.get('currentUser').toJS()
      : null,
);

export const makeSelectTokens = createSelector(
  selectAuth,
  authState => authState && authState.get('tokens').toJS(),
);

export { makeSelectLocation };
