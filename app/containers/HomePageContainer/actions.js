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
