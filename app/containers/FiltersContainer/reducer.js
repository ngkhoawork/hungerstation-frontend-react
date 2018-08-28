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
    { id: 'all', label: 'All Cuisines', isSelected: false },
    { id: 'beverages', label: 'Beverages', isSelected: true },
    { id: 'seafood', label: 'Sea Food', isSelected: true },
    { id: 'mexicanfood', label: 'Mexican Food', isSelected: false },
  ],
  deliveryTypes: [
    { id: 'all', label: 'All Delivery Types', isSelected: false },
    { id: 'pickup', label: 'Pickup', isSelected: true },
    {
      id: 'deliverybyrestaurant',
      label: 'Delivery by Restaurant',
      isSelected: false,
    },
    { id: 'mexicanFood', label: 'Thisrd-Party Delivery', isSelected: false },
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
