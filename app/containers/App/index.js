/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import HomePage from 'containers/HomePage/Loadable';
import LoginPageContainer from 'containers/LoginPageContainer';
import RegistrationPageContainer from 'containers/RegistrationPageContainer';

import Header from 'components/Header';
import { connect } from 'react-redux';
import { makeSelectLocale } from '../LanguageProvider/selectors';

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  dir: locale === 'ar' ? 'rtl' : 'ltr',
}));

const App = ({ dir }) => (
  <div dir={dir}>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPageContainer} />
      <Route path="/register" component={RegistrationPageContainer} />

      <Redirect from="*" to="/" />
    </Switch>
  </div>
);

App.propTypes = {
  dir: PropTypes.string,
};

export default connect(mapStateToProps)(App);
