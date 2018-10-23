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
import { makeSelectIsOpen, makeSelectView } from './selectors';
import reducer from './reducer';

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectIsOpen(),
  view: makeSelectView(),
});

const enhanced = compose(
  connect(mapStateToProps),
  injectReducer({ key: 'modalContainer', reducer }),
);

export const ModalContainer = ({ isOpen, view: View }) => (
  <ReactModal
    isOpen={isOpen}
    shouldCloseOnOverlayClick
    shouldCloseOnEsc
    className="Modal"
    overlayClassName="Overlay"
    ariaHideApp={false}
  >
    <View />
  </ReactModal>
);

ModalContainer.propTypes = {
  view: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  isOpen: PropTypes.bool.isRequired,
};

export default enhanced(ModalContainer);
