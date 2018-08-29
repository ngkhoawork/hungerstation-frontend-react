/*
 *
 * SearchBarContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_CITIES,
  SET_DISTRICTS,
  SELECT_CITY,
  SELECT_DISTRICT,
  SET_SETTLEMENT_DETAILS,
  TOGGLE_SETTLEMENT_LOADED,
} from './constants';

export const initialState = fromJS({
  cities: null,
  districts: null,
  selectedCity: null,
  selectedDistrict: null,
  isSettlementLoaded: true,
});

function searchBarContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CITIES:
      return onSetCities(state, action);
    case SET_DISTRICTS:
      return onSetDistricts(state, action);
    case SELECT_CITY:
      return onSelectCity(state, action);
    case SELECT_DISTRICT:
      return onSelectDistrict(state, action);
    case SET_SETTLEMENT_DETAILS:
      return onSetSettlementDetails(state, action);
    case TOGGLE_SETTLEMENT_LOADED:
      return onToggleSettlementLoaded(state, action);
    default:
      return state;
  }
}

const onSetCities = (state, action) => {
  const { cities } = action;
  return state.merge({
    cities,
  });
};

const onSetDistricts = (state, action) => {
  const { districts } = action;
  return state.merge({
    districts,
  });
};

const onSelectCity = (state, action) => {
  const { selectedCity } = action;
  return state.merge({
    selectedCity,
  });
};

const onSelectDistrict = (state, action) => {
  const { selectedDistrict } = action;
  return state.merge({
    selectedDistrict,
  });
};

const onSetSettlementDetails = (state, action) => {
  const { city, district } = action;
  return state.merge({
    selectedCity: city,
    selectedDistrict: district,
  });
};

const onToggleSettlementLoaded = (state, action) => {
  const { isLoaded } = action;
  return state.merge({
    isSettlementLoaded: isLoaded,
  });
};

export default searchBarContainerReducer;
