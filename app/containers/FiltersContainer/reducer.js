/*
 *
 * FiltersContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({
  tags: [
    { id: 'fastdelivery', label: 'Fast Delivery', isSelected: false },
    { id: 'creditcard', label: 'Credit Card', isSelected: true },
    { id: 'dailybigdeal', label: 'Daily Big Deal', isSelected: false },
  ],
  cuisines: [
    { id: 'all', label: 'All Cuisines', isSelected: true },
    { id: 'beverages', label: 'Beverages', isSelected: false },
    { id: 'sea', label: 'Sea Food', isSelected: false },
    { id: 'mexican', label: 'Mexican Food', isSelected: false },
    { id: 'indian', label: 'Indian Food', isSelected: false },
    { id: 'american', label: 'American', isSelected: false },
    { id: 'bakery', label: 'Bakery', isSelected: false },
    { id: 'arabian', label: 'Arabian Food', isSelected: false },
    { id: 'italian', label: 'Italian Food', isSelected: false },
    { id: 'asian', label: 'Asian Food', isSelected: false },
    { id: 'grills', label: 'Grills', isSelected: false },
    { id: 'fast', label: 'Fast Food', isSelected: false },
    { id: 'sandwiches', label: 'Sandwiches', isSelected: false },
    { id: 'desserts', label: 'Desserts', isSelected: false },
    { id: 'turkish', label: 'Turkish Food', isSelected: false },
    { id: 'foodbeverage', label: 'Food & Beverage', isSelected: false },
    { id: 'deliveryfood', label: '20 min delivery or free', isSelected: false },
  ],
  deliveryTypes: [
    { id: 'all', label: 'All Delivery Types', isSelected: false },
    { id: 'pickup', label: 'Pickup', isSelected: true },
    {
      id: 'deliverybyrestaurant',
      label: 'Delivery by Restaurant',
      isSelected: false,
    },
    { id: 'mexicanFood', label: 'Third-Party Delivery', isSelected: false },
  ],
});

function filtersContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default filtersContainerReducer;
