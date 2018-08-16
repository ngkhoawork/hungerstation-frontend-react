/*
 *
 * HomePageContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_CITIES,
  SET_DISTRICTS,
  SELECT_CITY,
  SELECT_DISTRICT,
  SELECT_SEARCH_TYPE,
} from './constants';

export const initialState = fromJS({
  cities: null,
  districts: null,
  selectedCity: null,
  selectedDistrict: null,
  selectedSearchType: 'delivery',
});

function homePageContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CITIES:
      return onSetCities(state, action);
    case SET_DISTRICTS:
      return onSetDistricts(state, action);
    case SELECT_CITY:
      return onSelectCity(state, action);
    case SELECT_DISTRICT:
      return onSelectDistrict(state, action);
    case SELECT_SEARCH_TYPE:
      return onSelectSearchType(state, action);
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

const onSelectSearchType = (state, action) => {
  const { selectedType } = action;
  return state.merge({
    selectedSearchType: selectedType,
  });
};

export default homePageContainerReducer;
