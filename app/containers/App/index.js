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

import HomePage from 'pages/HomePage/Loadable';
import LoginPage from 'pages/LoginPage/Loadable';
import RegistrationPage from 'pages/RegistrationPage/Loadable';
import ResetPasswordPage from 'pages/ResetPasswordPage/Loadable';
import ForgotPasswordPage from 'pages/ForgotPasswordPage/Loadable';
import RestaurantsPage from 'pages/RestaurantsPage/Loadable';

import UserProfile from 'components/UserProfile';
import AddRestaurantBanner from 'components/AddRestaurantBanner';

import PrivateRouteContainer from 'containers/PrivateRouteContainer';
import ModalContainer from 'containers/ModalContainer';
import FiltersContainer from 'containers/FiltersContainer';
import FiltersSection from 'pages/RestaurantsPage/FiltersSection';

import Header from 'components/Header';
import Footer from 'components/Footer/Loadable';
import { connect } from 'react-redux';
import { makeSelectLocale } from '../LanguageProvider/selectors';
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
      <StyledApp
        dir={dir}
        dark={/login|register|forgot-password/.test(location.pathname)}
      >
        <CssBaseline />

        <ModalContainer>
          <FiltersContainer>
            {props => <FiltersSection {...props} />}
          </FiltersContainer>
        </ModalContainer>

        <AddRestaurantBanner />
        {location.pathname !== '/' && <Header dark />}
        <Switch>
          <Route
            exact
            path="/"
            render={props => [<HomePage {...props} />, <Footer />]}
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/reset-password" component={ResetPasswordPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route
            path="/restaurants"
            render={props => [<RestaurantsPage {...props} />, <Footer />]}
          />
          <PrivateRouteContainer path="/userprofile" component={UserProfile} />

          <Redirect from="*" to="/" />
        </Switch>
      </StyledApp>
    );
  }
}
