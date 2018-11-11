import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isLoggedIn === undefined) return null;
      if (isLoggedIn) return <Component {...props} />;

      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  location: PropTypes.object.isRequired,
};

export default PrivateRoute;
