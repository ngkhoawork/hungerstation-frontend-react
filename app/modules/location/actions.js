import createAction from 'utils/actions/createAction';

export const getLocation = createAction(
  'location/GET_LOCATION',
  payload => payload,
);

export const getCurrentLocationAction = createAction(
  'location/GET_CURRENT_LOCATION',
);

export const getCurrentCityAction = createAction('location/GET_CURRENT_CITY');

export const saveCurrentLocationAction = createAction(
  'location/SAVE_CURRENT_LOCATION',
  coords => ({ ...coords }),
);

export const getCitiesAction = createAction('location/GET_CITIES');

export const setSettlementDetailsAction = createAction(
  'location/SET_SETTLEMENT_DETAILS',
  ({ city, district }) => ({ city, district }),
);

export const toggleSettlementLoadedAction = createAction(
  'location/TOGGLE_SETTLEMENT_LOADED',
  isLoaded => ({ isLoaded }),
);

export const setCitiesAction = createAction('location/SET_CITIES', cities => ({
  cities,
}));

export const setDistrictsAction = createAction(
  'location/SET_DISTRICTS',
  districts => ({ districts }),
);

export const selectCityAction = createAction(
  'location/SELECT_CITY',
  selectedCity => ({ selectedCity }),
);

export const selectDistrictAction = createAction(
  'location/SELECT_DISTRICT',
  selectedDistrict => ({ selectedDistrict }),
);

export const submitSearchQuery = createAction(
  'location/SUBMIT_SEARCH_QUERY',
  ({ history, selectedCity, selectedDistrict }) => ({
    history,
    selectedCity,
    selectedDistrict,
  }),
);

export const saveLocation = createAction(
  'location/SAVE_LOCATION',
  ({ selectedCity, selectedDistrict }) => ({ selectedCity, selectedDistrict }),
);
