/**
 *
 * RegistrationPageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import RegistrationForm from 'components/RegistrationForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { reducer } from 'redux-form/immutable';
import makeSelectRegistrationPageContainer from './selectors';
import saga from './saga';
import messages from './messages';

const mapStateToProps = createStructuredSelector({
  registrationpagecontainer: makeSelectRegistrationPageContainer(),
});

const mapDispatchToProps = {
  onSubmit: ({ toJS }) => ({
    type: 'submit',
    payload: { ...toJS() },
  }),
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectReducer({ key: 'form', reducer })
@injectSaga({ key: 'registrationPageContainer', saga })
export default class RegistrationPageContainer extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <RegistrationForm onSubmit={onSubmit} />
      </div>
    );
  }
}
