import { fromJS } from 'immutable';
import { sortAlphabetically } from 'utils/helpers';
import { logout } from 'modules/auth/actions';
import {
  setCitiesAction,
  setDistrictsAction,
  selectCityAction,
  selectDistrictAction,
  setSettlementDetailsAction,
  toggleSettlementLoadedAction,
  saveCurrentLocationAction,
  saveLocation,
} from './actions';

export const initialState = fromJS({
  cities: [],
  districts: [],
  selectedCity: null,
  selectedDistrict: null,
  coords: {
    lat: 24.7706825,
    lng: 46.6627549,
  },
});

function searchBarContainerReducer(state = initialState, action) {
  switch (action.type) {
    case setCitiesAction.type:
      return onSetCities(state, action);
    case setDistrictsAction.type:
      return onSetDistricts(state, action);
    case selectCityAction.type:
      return onSelectCity(state, action);
    case selectDistrictAction.type:
      return onSelectDistrict(state, action);
    case setSettlementDetailsAction.type:
      return onSetSettlementDetails(state, action);
    case toggleSettlementLoadedAction.type:
      return onToggleSettlementLoaded(state, action);
    case saveCurrentLocationAction.type:
      return onSaveCurrentLocationAction(state, action);
    case saveLocation.type:
      return onSaveLocation(state, action);
    case logout.type:
      return initialState;
    default:
      return state;
  }
}

const onSetCities = (state, action) => {
  const { cities } = action.payload;
  sortAlphabetically(cities);
  return state.merge({
    cities,
  });
};

const onSetDistricts = (state, action) => {
  const { districts } = action.payload;
  return state.merge({
    districts,
  });
};

const onSelectCity = (state, action) => {
  const { selectedCity } = action.payload;
  return state.merge({
    selectedCity,
    selectedDistrict: null,
  });
};

const onSelectDistrict = (state, action) => {
  const { selectedDistrict } = action.payload;
  return state.merge({
    selectedDistrict,
  });
};

const onSetSettlementDetails = (state, action) => {
  const { city, district } = action.payload;
  return state.merge({
    selectedCity: city,
    selectedDistrict: district,
  });
};

const onToggleSettlementLoaded = (state, action) => {
  const { isLoaded } = action.payload;
  return state.merge({
    isSettlementLoaded: isLoaded,
  });
};

const onSaveCurrentLocationAction = (state, action) =>
  state.merge({
    coords: action.payload,
    isSettlementLoaded: true,
  });

const onSaveLocation = (
  state,
  { payload: { selectedCity, selectedDistrict } },
) =>
  state.merge({
    selectedCity,
    selectedDistrict,
  });

export default searchBarContainerReducer;
