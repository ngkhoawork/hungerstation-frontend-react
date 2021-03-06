/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import formReducer from 'hocs/withFormState/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import cartReducer from 'containers/CartContainer/reducer';
import authReducer from 'modules/auth/reducer';
import locationReducer from 'modules/location/reducer';
import restaurantsReducer from 'modules/restaurants/reducer';
import restaurantReducer from 'modules/restaurant/reducer';
import ordersReducer from 'modules/orders/reducer';
import addressReducer from 'modules/address/reducer';
import checkoutReducer from 'modules/checkout/reducer';
import faqsReducer from 'modules/faqs/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    auth: authReducer,
    location: locationReducer,
    form: formReducer,
    restaurants: restaurantsReducer,
    restaurant: restaurantReducer,
    orders: ordersReducer,
    address: addressReducer,
    checkout: checkoutReducer,
    cart: cartReducer,
    faqs: faqsReducer,
    ...injectedReducers,
  });
}
