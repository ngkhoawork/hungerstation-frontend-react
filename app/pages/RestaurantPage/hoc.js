import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setStorageItem, getStorageItem } from 'utils/localStorage';
import { getQueryParams, removeQueryParam } from 'utils/route';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import { addToCart, emptyCart } from 'containers/CartContainer/actions';
import { selectCartPurchases } from 'containers/CartContainer/selectors';
import CartContainer from 'containers/CartContainer';
import { fetchRestaurant } from 'modules/restaurant/actions';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import LocationOptions from 'containers/LocationOptionsContainer';
import RestaurantPage from './component';

class RestaurantPageHOC extends React.Component {
  componentDidMount() {
    const {
      match: { params },
      location,
      showPopup,
      hideModal,
    } = this.props;
    const { branchId, city, district } = params;

    if (getQueryParams(location).basket) {
      const CartContainerHOC = () => <CartContainer params={params} isModal />;
      this.props.showModal(CartContainerHOC);
      removeQueryParam('basket');
    }

    if (showPopup) {
      const LocationOptionsHOC = () => (
        <LocationOptions
          city={city}
          district={district}
          onSubmit={() => {
            hideModal();
            this.props.fetchRestaurant({ branchId, city, district });
          }}
        />
      );
      this.props.showModal(LocationOptionsHOC);
    } else {
      this.props.fetchRestaurant({ branchId, city, district });
    }

    if (getStorageItem('branchId') !== branchId) this.props.emptyCart();
  }

  componentDidUpdate(prevProps) {
    // clicking on basket icon on restaurant page adds 'basket' query param
    // which needs to be removed so that you don't come back to basket by e.g.
    // clicking back btn on checkout page.
    if (
      getQueryParams(this.props.location).basket &&
      !getQueryParams(prevProps.location).basket
    ) {
      removeQueryParam('basket');
    }
  }

  componentWillUnmount() {
    this.props.hideModal();
  }

  handleAddToCart = product => {
    this.props.addToCart(product);
    setStorageItem('branchId', this.props.match.params.branchId);
    setStorageItem('city', this.props.match.params.city);
    setStorageItem('district', this.props.match.params.district);
  };

  render() {
    const {
      restaurantState: { restaurant, isLoading },
      cartItems,
      match,
    } = this.props;

    return (
      <RestaurantPage
        params={match.params}
        isLoading={isLoading || isLoading === undefined}
        restaurant={restaurant}
        cartItems={cartItems}
        onAddToCart={this.handleAddToCart}
        onShowModal={this.props.showModal}
        onHideModal={this.props.hideModal}
      />
    );
  }
}

RestaurantPageHOC.propTypes = {
  showPopup: PropTypes.bool,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  fetchRestaurant: PropTypes.func.isRequired,
  restaurantState: PropTypes.object.isRequired,
  cartItems: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  emptyCart: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    restaurantState: selectRestaurantState(state),
    cartItems: selectCartPurchases(state),
  }),
  { showModal, hideModal, fetchRestaurant, addToCart, emptyCart },
)(RestaurantPageHOC);
