/*
 *
 * SearchBarContainer actions
 *
 */

import {
  GET_CURRENT_LOCATION,
  SET_SETTLEMENT_DETAILS,
  TOGGLE_SETTLEMENT_LOADED,
  REQUEST_CITIES,
  SET_CITIES,
  SET_DISTRICTS,
  SELECT_CITY,
  SELECT_DISTRICT,
} from './constants';

export const getCurrentLocationAction = () => ({
  type: GET_CURRENT_LOCATION,
});

export const setSettlementDetailsAction = (city, district) => ({
  type: SET_SETTLEMENT_DETAILS,
  city,
  district,
});

export const toggleSettlementLoadedAction = isLoaded => ({
  type: TOGGLE_SETTLEMENT_LOADED,
  isLoaded,
});

export const getCitiesAction = () => ({
  type: REQUEST_CITIES,
});

export const setCitiesAction = cities => ({
  type: SET_CITIES,
  cities,
});

export const setDistrictsAction = districts => ({
  type: SET_DISTRICTS,
  districts,
});

export const selectCityAction = selectedCity => ({
  type: SELECT_CITY,
  selectedCity,
});

export const selectDistrictAction = selectedDistrict => ({
  type: SELECT_DISTRICT,
  selectedDistrict,
});
