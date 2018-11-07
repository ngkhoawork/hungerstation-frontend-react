import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import InsufficientOrderAmount from 'components/InsufficientOrderAmount';
import { hideModal } from 'containers/ModalContainer/actions';

const InsufficientOrderAmountHOC = ({ hideModal, history, location }) => {
  const handleAddMore = () => {
    const path = location.pathname.split('/');
    path.pop(); // remove /checkout from pathname
    history.push(path.join('/'));
    hideModal();
  };

  return (
    <InsufficientOrderAmount onCancel={hideModal} onAddMore={handleAddMore} />
  );
};

InsufficientOrderAmountHOC.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  connect(
    null,
    { hideModal },
  ),
)(InsufficientOrderAmountHOC);
