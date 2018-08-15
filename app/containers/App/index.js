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

import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import injectSaga from 'utils/injectSaga';

import HomePage from 'containers/HomePage/Loadable';
import LoginPageContainer from 'containers/LoginPageContainer';
import RegistrationPageContainer from 'containers/RegistrationPageContainer';
import PrivateRouteContainer from 'containers/PrivateRouteContainer';
import UserProfile from 'components/UserProfile';
import ResetPasswordPage from 'components/ResetPasswordPage';
import ForgotPasswordPage from 'components/ForgotPasswordPage';

import Header from 'components/Header';
import { connect } from 'react-redux';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import saga from './authSagas';
import { authenticateUser } from './authActions';

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  dir: locale === 'ar' ? 'rtl' : 'ltr',
}));

const mapDispatchToProps = {
  authenticateUser,
};

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectSaga({ key: 'auth', saga })
export default class App extends Component {
  static propTypes = {
    dir: PropTypes.string,
    authenticateUser: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { authenticateUser: authenticate } = this.props;
    authenticate();
  }

  render() {
    const { dir } = this.props;
    return (
      <div dir={dir}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPageContainer} />
          <Route path="/register" component={RegistrationPageContainer} />
          <Route path="/reset-password" component={ResetPasswordPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <PrivateRouteContainer path="/userprofile" component={UserProfile} />

          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}
