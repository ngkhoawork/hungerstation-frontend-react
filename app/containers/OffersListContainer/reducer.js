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
      brand: 'Burger King',
      title: 'Minimal Price for Double Whooper',
      description: 'Promotion available till 25.08.2018',
    },
    {
      id: '2',
      brand: 'Burger King',
      title: 'Minimal Price for Double Whooper',
      description: 'Promotion available till 25.08.2018',
    },
    {
      id: '3',
      brand: 'Burger King',
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
