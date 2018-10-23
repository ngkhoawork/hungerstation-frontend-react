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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from 'pages/HomePage/Loadable';
import RestaurantsPage from 'pages/RestaurantsPage/Loadable';
import LoginPage from 'pages/LoginPage/Loadable';
import RegistrationPage from 'pages/RegistrationPage/Loadable';
import ResetPasswordPage from 'pages/ResetPasswordPage/Loadable';
import ForgotPasswordPage from 'pages/ForgotPasswordPage/Loadable';

import UserProfile from 'components/UserProfile';
import PrivateRouteContainer from 'containers/PrivateRouteContainer';

import { makeSelectLocale } from '../LanguageProvider/selectors';
import { authenticateUser } from '../../modules/auth/actions';
import StyledApp from './StyledApp';
import Modals from './Modals';

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
export default class App extends Component {
  static propTypes = {
    dir: PropTypes.string,
    authenticateUser: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  };

  componentWillMount() {
    const { authenticateUser: authenticate } = this.props;
    authenticate();
  }

  render() {
    const { dir, location } = this.props;
    const isDark = /login|register|forgot-password/.test(location.pathname);
    return (
      <StyledApp dir={dir} dark={isDark}>
        <CssBaseline />

        <Modals />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/restaurants/:city/:district/:deliveryType?"
            component={RestaurantsPage}
          />
          <PrivateRouteContainer path="/userprofile" component={UserProfile} />

          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/reset-password" component={ResetPasswordPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />

          <Redirect from="*" to="/" />
        </Switch>
      </StyledApp>
    );
  }
}
