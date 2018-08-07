/**
 *
 * RegistrationPageContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

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
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <SignUpForm onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}
