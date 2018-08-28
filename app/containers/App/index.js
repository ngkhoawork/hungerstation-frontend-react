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

import HomePageContainer from 'containers/HomePageContainer';
import LoginPage from 'components/LoginPage';
import RegistrationPage from 'components/RegistrationPage';
import PrivateRouteContainer from 'containers/PrivateRouteContainer';
import UserProfile from 'components/UserProfile';
import ResetPasswordPage from 'components/ResetPasswordPage';
import ForgotPasswordPage from 'components/ForgotPasswordPage';
import AddRestaurantBanner from 'components/AddRestaurantBanner';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { connect } from 'react-redux';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import saga from './authSagas';
// import { authenticateUser } from './authActions';
import StyledApp from './StyledApp';

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  dir: locale === 'ar' ? 'rtl' : 'ltr',
}));

// const mapDispatchToProps = {
//   authenticateUser,
// };

@withRouter
@connect(
  mapStateToProps,
  // mapDispatchToProps,
)
@injectSaga({ key: 'auth', saga })
export default class App extends Component {
  static propTypes = {
    dir: PropTypes.string,
    // authenticateUser: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  };

  // componentWillMount() {
  //   const { authenticateUser: authenticate } = this.props;
  //   authenticate();
  // }

  render() {
    const { dir, location } = this.props;
    return (
      <StyledApp dir={dir}>
        <CssBaseline />
        <AddRestaurantBanner />
        {location.pathname !== '/' && <Header />}
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/reset-password" component={ResetPasswordPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <PrivateRouteContainer path="/userprofile" component={UserProfile} />

          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </StyledApp>
    );
  }
}
