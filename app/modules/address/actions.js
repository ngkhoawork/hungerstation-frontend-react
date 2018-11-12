import createAction from 'utils/actions/createAction';

export const addressRequest = createAction('address/ADDRESS_REQUEST');

export const fetchAddresses = createAction(
  'address/FETCH_ADDRESSES',
  payload => payload,
);

export const fetchAddressesSuccess = createAction(
  'address/FETCH_ADDRESSES_SUCCESS',
  payload => payload,
);

export const saveAddress = createAction(
  'address/SAVE_ADDRESS',
  payload => payload,
);

export const addressError = createAction('address/ADDRESS_ERROR');

export const setPrimaryAddress = createAction(
  'address/SET_PRIMARY_ADDRESS',
  payload => payload,
);
