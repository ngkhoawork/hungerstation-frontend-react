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
import { compose, withProps } from 'recompose';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import HomePage from 'pages/HomePage/Loadable';
import RestaurantsPage from 'pages/RestaurantsPage/Loadable';
import RestaurantPage from 'pages/RestaurantPage';
import OrdersPage from 'pages/OrdersPage';
import OrderDetailPage from 'pages/OrderDetailPage';
import CheckoutPage from 'pages/CheckoutPage';
import LoginPage from 'pages/LoginPage/Loadable';
import RegistrationPage from 'pages/RegistrationPage/Loadable';
import ResetPasswordPage from 'pages/ResetPasswordPage/Loadable';
import ForgotPasswordPage from 'pages/ForgotPasswordPage/Loadable';
import AboutUsPage from 'pages/FooterPages/AboutUsPage/Loadable';
import FAQsPage from 'pages/FooterPages/FAQsPage/Loadable';
import ContactUsPage from 'pages/FooterPages/ContactUsPage/Loadable';
import PrivacyPolicyPage from 'pages/FooterPages/PrivacyPolicyPage/Loadable';

import UserProfile from 'components/UserProfile';
import PrivateRouteContainer from 'containers/PrivateRouteContainer';
import ModalContainer from 'containers/ModalContainer';
import ScrollToTop from 'containers/ScrollToTop';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { authenticateUser } from 'modules/auth/actions';
import StyledApp from './StyledApp';
import Modals from './Modals';

import theme from '../../theme';

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  dir: locale === 'ar' ? 'rtl' : 'ltr',
}));

const mapDispatchToProps = {
  authenticateUser,
};

const enhance = compose(withProps(props => ({ ...props, showPopup: true })));
const RestaurantPageWithPopup = enhance(RestaurantPage);

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

  constructor(props) {
    super(props);
    props.authenticateUser();
  }

  componentDidMount() {
    setHistory(this.props.history);
  }

  render() {
    const { dir, location } = this.props;
    theme.direction = dir;

    const isDark = /login|register|forgot-password/.test(location.pathname);
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <StyledApp dark={isDark}>
            <CssBaseline />
            <Modals />
            <ModalContainer />
            <ScrollToTop />
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
                showPopup
                exact
                path="/restaurant/:branchId"
                component={RestaurantPageWithPopup}
              />
              <Route
                showPopup
                exact
                path="/restaurant/:branchId/:city"
                component={RestaurantPageWithPopup}
              />
              <Route
                showPopup
                exact
                path="/restaurant/:branchId/:city/:district"
                component={RestaurantPageWithPopup}
              />
              <Route
                path="/restaurants/:city/:district/:deliveryType?"
                component={RestaurantsPage}
              />
              <PrivateRouteContainer
                path="/userprofile"
                component={UserProfile}
              />
              <PrivateRouteContainer
                exact
                path="/my-orders"
                component={OrdersPage}
              />
              <PrivateRouteContainer
                exact
                path="/my-orders/:orderId"
                component={OrderDetailPage}
              />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegistrationPage} />
              <Route path="/reset-password" component={ResetPasswordPage} />
              <Route path="/forgot-password" component={ForgotPasswordPage} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/faqs" component={FAQsPage} />
              <Route path="/contactus" component={ContactUsPage} />
              <Route
                exact
                path="/privacy-policy"
                component={PrivacyPolicyPage}
              />
              <Redirect from="*" to="/" />
            </Switch>
          </StyledApp>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}
