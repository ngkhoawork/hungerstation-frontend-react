import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { makeSelectTokens } from 'modules/auth/selectors';
import {
  addressRequest,
  fetchAddresses,
  fetchAddressesSuccess,
  saveAddress,
  saveAddressSuccess,
  addressError,
} from './actions';
import * as api from './api';

export function* fetchAddressesSaga({ payload }) {
  try {
    yield put(addressRequest());

    const { accessToken } = yield select(makeSelectTokens);
    const { addresses } = yield call(api.getAddresses, accessToken, payload);
    const parsedAddresses = addresses.map(({ address_details }) => ({
      ...address_details,
    }));

    yield put(fetchAddressesSuccess({ addresses: parsedAddresses }));
  } catch (e) {
    yield put(addressError());
    // console.log(e);
  }
}

export function* saveAddressSaga({ payload }) {
  try {
    // if address shouldn't be saved but used only for current session's order
    if (!payload.specific_type) {
      yield put(
        saveAddressSuccess({
          ...payload,
          id: payload.id || `${Math.random()}`,
        }),
      );
      return;
    }

    yield put(addressRequest());

    // const { accessToken } = yield select(makeSelectTokens);
    // const { address } = yield call(api.saveAddress, accessToken, payload);
    const address = { ...payload, id: payload.id || `${Math.random()}` };

    yield put(saveAddressSuccess(address));
  } catch (e) {
    yield put(addressError());
    // console.log(e);
  }
}

export default function* watchAddressActionsSaga() {
  yield takeLatest(fetchAddresses.type, fetchAddressesSaga);
  yield takeEvery(saveAddress.type, saveAddressSaga);
}
