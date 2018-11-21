import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'modules/auth/actions';
import { clearStorageItem } from 'utils/localStorage';

class LogoutPageHOC extends React.Component {
  componentDidMount() {
    clearStorageItem('tokens');
    clearStorageItem('userId');
    this.props.logout();
    this.props.history.push('/login');
  }

  render() {
    return null;
  }
}

LogoutPageHOC.propTypes = {
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(
  null,
  { logout },
)(LogoutPageHOC);
