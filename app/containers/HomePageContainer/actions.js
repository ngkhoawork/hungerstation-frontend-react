/*
 *
 * HomePageContainer actions
 *
 */

import {
  REQUEST_CITIES,
  SET_CITIES,
  SET_DISTRICTS,
  SELECT_CITY,
  SELECT_DISTRICT,
  SELECT_SEARCH_TYPE,
  GET_CURRENT_LOCATION,
  SET_SETTLEMENT_DETAILS,
  TOGGLE_SETTLEMENT_LOADED,
} from './constants';

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

export const selectSearchTypeAction = selectedType => ({
  type: SELECT_SEARCH_TYPE,
  selectedType,
});

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
