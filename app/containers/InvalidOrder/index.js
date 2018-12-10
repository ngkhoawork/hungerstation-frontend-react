import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import { selectCheckoutState } from 'modules/checkout/selectors';
import InvalidOrder from 'components/InvalidOrder';

class InvalidOrderContainer extends React.Component {
  componentDidUpdate({ checkoutState }) {
    const { orderErrors = [] } = this.props.checkoutState;

    if (!(checkoutState.orderErrors || []).length && orderErrors.length) {
      const InvalidOrderHOC = () => (
        <InvalidOrder errors={orderErrors} onBtnClick={this.props.hideModal} />
      );

      this.props.showModal(InvalidOrderHOC);
    }
  }

  render() {
    return null;
  }
}

InvalidOrderContainer.propTypes = {
  checkoutState: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    checkoutState: selectCheckoutState(state),
  }),
  {
    showModal,
    hideModal,
  },
)(InvalidOrderContainer);
