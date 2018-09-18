/*
 *
 * FiltersContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { TOGGLE_SECTION } from './constants';

export const initialState = fromJS({
  tags: {
    isExpanded: true,
    options: [
      { id: 'fastdelivery', label: 'Fast Delivery', isSelected: false },
      { id: 'creditcard', label: 'Credit Card', isSelected: true },
      { id: 'dailybigdeal', label: 'Daily Big Deal', isSelected: false },
    ],
  },
  cuisines: {
    isExpanded: true,
    options: [
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
      {
        id: 'deliveryfood',
        label: '20 min delivery or free',
        isSelected: false,
      },
    ],
  },
  deliveryTypes: {
    isExpanded: true,
    options: [
      { id: 'all', label: 'All Delivery Types', isSelected: false },
      { id: 'pickup', label: 'Pickup', isSelected: true },
      {
        id: 'deliverybyrestaurant',
        label: 'Delivery by Restaurant',
        isSelected: false,
      },
      { id: 'mexicanFood', label: 'Third-Party Delivery', isSelected: false },
    ],
  },
});

function filtersContainerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SECTION:
      return onToggleSection(state, action);
    default:
      return state;
  }
}

const toggleExpandibility = (state, sectionName) =>
  state
    .get(sectionName)
    .set('isExpanded', !state.get(sectionName).get('isExpanded'));

const onToggleSection = (state, action) => {
  const { sectionName } = action;
  const updatedSectionObject = toggleExpandibility(state, sectionName);

  return state.merge({
    [sectionName]: updatedSectionObject,
  });
};

export default filtersContainerReducer;
