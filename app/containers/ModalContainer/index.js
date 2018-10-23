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

import injectReducer from 'utils/injectors/injectReducer';
import { hideModal } from './actions';
import { makeSelectIsOpen, makeSelectView } from './selectors';
import reducer from './reducer';

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectIsOpen(),
  view: makeSelectView(),
});

const enhanced = compose(
  connect(
    mapStateToProps,
    { hideModal },
  ),
  injectReducer({ key: 'modalContainer', reducer }),
);

export const ModalContainer = ({ isOpen, view: View, hideModal }) => (
  <ReactModal
    isOpen={isOpen}
    shouldCloseOnOverlayClick
    shouldCloseOnEsc
    onRequestClose={hideModal}
    className="Modal"
    overlayClassName="Overlay"
    ariaHideApp={false}
  >
    {View ? <View /> : null}
  </ReactModal>
);

ModalContainer.propTypes = {
  view: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
  isOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default enhanced(ModalContainer);
