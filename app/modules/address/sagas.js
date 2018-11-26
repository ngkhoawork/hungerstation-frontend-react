import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { makeSelectTokens } from 'modules/auth/selectors';
import {
  addressRequest,
  fetchAddresses,
  fetchAddressesSuccess,
  saveAddress,
  saveAddressSuccess,
  addressError,
  validateAddress,
  validateAddressRequest,
  validateAddressSuccess,
} from './actions';
import * as api from './api';

const parseAddress = ({ address_details, ...rest }) => ({
  ...address_details[0],
  ...address_details[0].dynamic_field,
  ...rest,
});

export function* fetchAddressesSaga({ payload }) {
  try {
    yield put(addressRequest());

    const { accessToken } = yield select(makeSelectTokens);
    const { addresses } = yield call(api.getAddresses, accessToken, payload);
    const parsedAddresses = addresses.map(parseAddress);

    yield put(fetchAddressesSuccess(parsedAddresses));
  } catch (e) {
    yield put(addressError());
    // console.log(e);
  }
}

export function* validateAddressSaga({ payload }) {
  try {
    yield put(validateAddressRequest());

    const { accessToken } = yield select(makeSelectTokens);
    const { validateAddress } = yield call(
      api.validateAddress,
      accessToken,
      payload,
    );

    yield put(validateAddressSuccess(validateAddress.message));
  } catch (e) {
    // console.log(e);
  }
}

export function* saveAddressSaga({ payload }) {
  try {
    const { accessToken } = yield select(makeSelectTokens);

    yield put(addressRequest());
    const res = yield call(api.saveAddress, accessToken, payload);
    const parsedAddress = parseAddress(res.createAddress || res.updateAddress);

    yield put(saveAddressSuccess(parsedAddress));
  } catch (e) {
    yield put(addressError());
    // console.log(e);
  }
}

export default function* watchAddressActionsSaga() {
  yield takeLatest(fetchAddresses.type, fetchAddressesSaga);
  yield takeEvery(saveAddress.type, saveAddressSaga);
  yield takeLatest(validateAddress.type, validateAddressSaga);
}
