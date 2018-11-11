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
import { setHistory } from 'utils/route';
import HomePage from 'pages/HomePage/Loadable';
import RestaurantsPage from 'pages/RestaurantsPage/Loadable';
import RestaurantPage from 'pages/RestaurantPage';
import CheckoutPage from 'pages/CheckoutPage';
import LoginPage from 'pages/LoginPage/Loadable';
import RegistrationPage from 'pages/RegistrationPage/Loadable';
import ResetPasswordPage from 'pages/ResetPasswordPage/Loadable';
import ForgotPasswordPage from 'pages/ForgotPasswordPage/Loadable';
import FAQsPage from 'pages/FooterPages/FAQsPage/Loadable';
import ContactUsPage from 'pages/FooterPages/ContactUsPage/Loadable';
import UserProfile from 'components/UserProfile';
import PrivateRouteContainer from 'containers/PrivateRouteContainer';
import ModalContainer from 'containers/ModalContainer';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { authenticateUser } from 'modules/auth/actions';
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
    history: PropTypes.object.isRequired,
    dir: PropTypes.string,
    authenticateUser: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  };

  componentDidMount() {
    setHistory(this.props.history);
    this.props.authenticateUser();
  }

  render() {
    const { dir, location } = this.props;
    const isDark = /login|register|forgot-password/.test(location.pathname);
    return (
      <StyledApp dir={dir} dark={isDark}>
        <CssBaseline />

        <Modals />
        <ModalContainer />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRouteContainer
            path="/restaurants/:city/:district/restaurant/:branchId/checkout"
            component={CheckoutPage}
          />
          <Route
            path="/restaurants/:city/:district/restaurant/:branchId"
            component={RestaurantPage}
          />
          <Route
            path="/restaurants/:city/:district/:deliveryType?"
            component={RestaurantsPage}
          />
          <PrivateRouteContainer path="/userprofile" component={UserProfile} />

          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/reset-password" component={ResetPasswordPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route exact path="/faqs" component={FAQsPage} />
          <Route path="/contactus" component={ContactUsPage} />

          <Redirect from="*" to="/" />
        </Switch>
      </StyledApp>
    );
  }
}
