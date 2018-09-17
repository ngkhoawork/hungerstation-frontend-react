/**
 *
 * ModalContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ReactModal from 'react-modal';
import { compose } from 'recompose';

import injectReducer from 'utils/injectReducer';
import { makeSelectIsOpen } from './selectors';
import reducer from './reducer';

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectIsOpen,
});

const enhanced = compose(
  connect(mapStateToProps),
  injectReducer({ key: 'modalContainer', reducer }),
);

export const ModalContainer = ({ children, isOpen }) => (
  <ReactModal
    isOpen={isOpen}
    shouldCloseOnOverlayClick
    shouldCloseOnEsc
    className="Modal"
    overlayClassName="Overlay"
    ariaHideApp={false}
  >
    {children}
  </ReactModal>
);

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default enhanced(ModalContainer);
