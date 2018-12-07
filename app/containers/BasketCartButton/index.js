import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from 'containers/ModalContainer/actions';
import CartContainer from 'containers/CartContainer';
import ViewCartButton from 'containers/ViewCartButton';

const BasketCartButtonHOC = ({ params, showModal, ...props }) => {
  const handleBasketClick = () => {
    if (props.onBasketClick) {
      props.onBasketClick();
      return;
    }

    const CartContainerHOC = () => <CartContainer params={params} isModal />;
    showModal(CartContainerHOC);
  };

  return (
    <ViewCartButton {...props} onBasketClick={handleBasketClick} isWithBasket />
  );
};

BasketCartButtonHOC.propTypes = {
  params: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
  onBasketClick: PropTypes.func,
};

export default connect(
  null,
  { showModal },
)(BasketCartButtonHOC);
