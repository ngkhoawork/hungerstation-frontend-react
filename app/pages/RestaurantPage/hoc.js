import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import { addToCart } from 'containers/CartContainer/actions';
import { fetchRestaurant } from 'modules/restaurant/actions';
import { selectRestaurantState } from 'modules/restaurant/selectors';
import RestaurantPage from './component';

class RestaurantPageHOC extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.branchId);
  }

  render() {
    const { addToCart, showModal, hideModal, restaurantState } = this.props;

    return (
      <RestaurantPage
        restaurant={restaurantState.restaurant}
        onAddToCart={addToCart}
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
  addToCart: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({ restaurantState: selectRestaurantState(state) }),
  { showModal, hideModal, fetchRestaurant, addToCart },
)(RestaurantPageHOC);
