/**
 *
 * RegistrationPageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import saga from 'containers/App/authSagas';
import { registerRequest } from 'containers/App/authActions';
import RegistrationPage from 'components/RegistrationPage';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  onSubmit: registerRequest,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectSaga({ key: 'auth', saga })
export default class RegistrationPageContainer extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return <RegistrationPage onSubmit={onSubmit} />;
  }
}

RegistrationPageContainer.propTypes = {
  onSubmit: PropTypes.func,
};
