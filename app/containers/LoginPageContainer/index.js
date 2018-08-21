/**
 *
 * LoginPageContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LoginPage from 'components/LoginPage';

// import injectSaga from 'utils/injectSaga';
// import saga from '../App/authSagas';
import { loginRequest } from './actions';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  onSubmit: loginRequest,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LoginPageContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({
          pathname: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  handleSubmit = values => {
    const {
      onSubmit,
      location: { state },
    } = this.props;

    let from;
    if (state) {
      from = state.from.pathname;
    } else {
      from = '/';
    }

    onSubmit(values.toJS(), from);
  };

  render() {
    return <LoginPage onSubmit={this.handleSubmit} />;
  }
}
