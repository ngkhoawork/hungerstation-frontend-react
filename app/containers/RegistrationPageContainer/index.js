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
import injectReducer from 'utils/injectReducer';
import makeSelectRegistrationPageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const mapStateToProps = createStructuredSelector({
  registrationpagecontainer: makeSelectRegistrationPageContainer(),
});

const mapDispatchToProps = {};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectReducer({ key: 'registrationPageContainer', reducer })
@injectSaga({ key: 'registrationPageContainer', saga })
export default class RegistrationPageContainer extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}
