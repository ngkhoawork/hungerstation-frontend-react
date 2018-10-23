import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ReactModal from 'react-modal';
import { injectReducer } from 'utils/injectors';
import { makeSelectIsOpen } from './selectors';
import { toggleModal } from './actions';
import reducer from './reducer';

// TODO ADD ID GENERATOR FOR EVERY MODAL, OR KEY IMPLEMENTATION
const withModal = WrappedComponent => {
  const decorate = compose(
    injectReducer({ key: 'withModal', reducer }),
    connect(
      () => {
        const selectIsOpen = makeSelectIsOpen();
        return state => ({
          isOpen: selectIsOpen(state),
        });
      },
      { toggleModal },
    ),
  );

  const Modal = ({ isOpen, toggleModal, ...rest }) => (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
    >
      <WrappedComponent
        toggleModal={toggleModal}
        isModalOpen={isOpen}
        {...rest}
      />
    </ReactModal>
  );
  // const DecoratedModal = decorate(Modal);
  return decorate(Modal);
};

export default withModal;
