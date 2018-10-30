import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModal } from 'containers/ModalContainer/actions';
import ModalFrame from 'components/ModalFrame';

const ModalFrameContainer = ({ hideModal, ...props }) => (
  <ModalFrame onCancel={hideModal} {...props} />
);

ModalFrameContainer.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default connect(
  null,
  { hideModal },
)(ModalFrameContainer);
