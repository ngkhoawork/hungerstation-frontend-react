import createAction from 'utils/actions/createAction';

export const getCurrentLocationAction = createAction(
  'location/GET_CURRENT_LOCATION',
);

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
  history => ({ history }),
);
