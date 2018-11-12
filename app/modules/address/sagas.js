import { delay } from 'redux-saga';
import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { makeSelectTokens } from 'modules/auth/selectors';
import {
  addressRequest,
  fetchAddresses,
  fetchAddressesSuccess,
  saveAddress,
  addressError,
} from './actions';
import * as api from './api';

export function* fetchAddressesSaga({ payload }) {
  try {
    yield put(addressRequest());

    const { accessToken } = yield select(makeSelectTokens);
    const { addresses } = yield call(api.getAddresses, accessToken, payload);
    const parsedAddresses = addresses.map(({ id, address_details }) => ({
      ...address_details[0],
      id,
    }));

    yield put(fetchAddressesSuccess(parsedAddresses));
  } catch (e) {
    yield put(addressError());
    // console.log(e);
  }
}

export function* saveAddressSaga({ payload }) {
  try {
    const { address, branchId } = payload;
    const { accessToken } = yield select(makeSelectTokens);

    yield put(addressRequest());
    yield call(api.saveAddress, accessToken, address);
    yield call(delay, 200);
    yield put(fetchAddresses(branchId));
  } catch (e) {
    yield put(addressError());
    // console.log(e);
  }
}

export default function* watchAddressActionsSaga() {
  yield takeLatest(fetchAddresses.type, fetchAddressesSaga);
  yield takeEvery(saveAddress.type, saveAddressSaga);
}
