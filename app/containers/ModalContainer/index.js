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

import injectReducer from 'utils/injectReducer';
import { makeSelectIsOpen } from './selectors';
import reducer from './reducer';

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectIsOpen,
});

@connect(mapStateToProps)
@injectReducer({ key: 'modalContainer', reducer })
/* eslint-disable react/prefer-stateless-function */
export default class ModalContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  render() {
    const { children, isOpen } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        onRequestClose={this.toggleModal}
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        {children}
      </ReactModal>
    );
  }
}
