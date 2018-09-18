/*
 *
 * OffersListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({
  offers: [
    {
      id: '1',
      brand: 'Burger King 1',
      title: 'Minimal Price for Double Whooper',
      description: 'Promotion available till 25.08.2018',
    },
    {
      id: '2',
      brand: 'Burger King 2',
      title: 'Minimal Price for Double Whooper',
      description: 'Till 25.08.2018',
    },
    {
      id: '3',
      brand: 'Burger King 3',
      title: 'Minimal Price for Double Whooper',
      description: 'Promotion',
    },
    {
      id: '4',
      brand: 'Burger King 4',
      title: 'Minimal Price for Double Whooper',
      description: 'Promotion available till',
    },
    {
      id: '5',
      brand: 'Burger King 5',
      title: 'Minimal Price for Double Whooper',
      description: 'Promotion available till 25.08.2018',
    },
  ],
});

function offersListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default offersListContainerReducer;
