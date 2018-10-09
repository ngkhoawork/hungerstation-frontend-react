/*
 *
 * RestaurantsListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({
  restaurants: [
    {
      id: '1',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '2',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '3',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '4',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '5',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '6',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '7',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '8',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '9',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '10',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '11',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
    {
      id: '12',
      name: 'Al Sayad Al',
      deliveryTimeMin: 30,
      deliveryTimeMax: 45,
      minOrder: 250,
    },
  ],
});

function restaurantsListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default restaurantsListContainerReducer;
