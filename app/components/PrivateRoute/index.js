import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  location: PropTypes.object.isRequired,
};

PrivateRoute.defaultProps = {
  isLoggedIn: false,
};

export default PrivateRoute;
