import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from 'containers/ModalContainer/actions';
import CheckoutPage from './component';

class CheckoutPageHOC extends React.Component {
  componentDidMount() {}

  render() {
    const { showModal } = this.props;
    const user = {};

    return <CheckoutPage user={user} showModal={showModal} />;
  }
}

CheckoutPageHOC.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default connect(
  null,
  { showModal },
)(CheckoutPageHOC);
