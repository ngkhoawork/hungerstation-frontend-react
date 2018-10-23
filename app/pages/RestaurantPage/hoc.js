import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal, hideModal } from 'containers/ModalContainer/actions';
import BurgerKing from 'images/burgerking.png';
import RestaurantPage from './component';

const types = ['Featured', 'Burgers', 'Salads and Wraps', 'Desserts', 'Drinks'];
const products = [
  { id: '111', title: 'Tripple Whooper', img: '', price: 200, description: 'A classic composition of 100% grilled beef, juicy tomatos, freshly cut onion and pickles.' }, // eslint-disable-line
  { id: '222', title: 'Big Filler', price: 250 },
  { id: '333', title: 'Burger', price: 270 },
  { id: '444', title: 'Cheeseeee', price: 210 },
  { id: '555', title: 'Big Mac', price: 250 },
];
const info = {
  id: '123',
  logo: BurgerKing,
  name: 'Burger King',
  cuisines: [
    { id: 'american', label: 'American' },
    { id: 'fast', label: 'Fast Food' },
  ],
  deliveryPrice: 250,
  minOrder: 55,
  rating: '4.9',
  status: 'opensAt',
};
const restaurant = {
  info,
  types,
  products,
};

const RestaurantPageHOC = ({ showModal, hideModal }) => (
  <RestaurantPage
    restaurant={restaurant}
    onAddToCart={product => console.log(product)}
    onShowModal={showModal}
    onHideModal={hideModal}
  />
);

RestaurantPageHOC.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default connect(
  null,
  { showModal, hideModal },
)(RestaurantPageHOC);

/*
branch(id: 6) {
  id
  name
  local_id
  enabled
  delivery_provider
  accept_credit_card
  accept_sadad
  accept_cash_on_delivery
  accept_voucher
  deliver_using_map
  status
  has_promotion
  latitude
  longitude
  restaurant {
    id
    name
    logo
    kitchens {
      id
      name
    }
    reviews {
      average
      count
    }
    offers {
      id
      title
      description
      start_date
      end_date
    }
  }
  delivery_conditions {
    delivery_estimation_time
    minimum_order
    delivery_fee
  }
}
*/
