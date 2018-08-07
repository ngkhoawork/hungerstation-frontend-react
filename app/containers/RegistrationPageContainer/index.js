/**
 *
 * RegistrationPageContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import injectSaga from 'utils/injectSaga';
import makeSelectRegistrationPageContainer from './selectors';
import saga from './saga';
import messages from './messages';
import { registerRequest } from '../App/authActions';

import SignUpForm from './form';

const mapStateToProps = createStructuredSelector({
  registrationpagecontainer: makeSelectRegistrationPageContainer(),
});

const mapDispatchToProps = {
  onSubmit: registerRequest,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectSaga({ key: 'registrationPageContainer', saga })
export default class RegistrationPageContainer extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div>
        <FormattedMessage {...messages.header} />
        <SignUpForm onSubmit={onSubmit} />
      </div>
    );
  }
}

RegistrationPageContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
