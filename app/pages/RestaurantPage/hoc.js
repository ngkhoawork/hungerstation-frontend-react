import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStorageItem, setStorageItem } from 'utils/localStorage';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import {
  addToCart,
  emptyCart,
  initCart,
} from 'containers/CartContainer/actions';
import { selectCartPurchases } from 'containers/CartContainer/selectors';
import { fetchRestaurant } from 'modules/restaurant/actions';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import RestaurantPage from './component';

class RestaurantPageHOC extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { branchId },
      },
      restaurantState: { restaurant },
    } = this.props;

    this.props.fetchRestaurant(branchId);

    if (restaurant.id && branchId !== restaurant.id) this.props.emptyCart();

    if (getStorageItem('branchId') === branchId) this.props.initCart();
  }

  componentDidUpdate({ restaurantState: { restaurant } }) {
    const {
      restaurantState: {
        restaurant: { id },
      },
      match: {
        params: { branchId },
      },
    } = this.props;

    if (id && restaurant.id !== id && branchId !== id) {
      this.props.emptyCart();
    }
  }

  handleAddToCart = product => {
    this.props.addToCart(product);
    setStorageItem('branchId', this.props.match.params.branchId);
  };

  render() {
    const {
      showModal,
      hideModal,
      restaurantState: { restaurant, isLoading },
      cartItems,
    } = this.props;

    return (
      <RestaurantPage
        isLoading={isLoading || isLoading === undefined}
        restaurant={restaurant}
        cartItems={cartItems.map(({ product }) => product)}
        onAddToCart={this.handleAddToCart}
        onShowModal={showModal}
        onHideModal={hideModal}
      />
    );
  }
}

RestaurantPageHOC.propTypes = {
  match: PropTypes.object.isRequired,
  fetchRestaurant: PropTypes.func.isRequired,
  restaurantState: PropTypes.object.isRequired,
  cartItems: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  initCart: PropTypes.func.isRequired,
  emptyCart: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    restaurantState: selectRestaurantState(state),
    cartItems: selectCartPurchases(state),
  }),
  { showModal, hideModal, fetchRestaurant, addToCart, emptyCart, initCart },
)(RestaurantPageHOC);
