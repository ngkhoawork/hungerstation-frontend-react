import { put, call } from 'redux-saga/effects';
import HungerStationAPI from 'api/HungerStationAPI';
import { setAuthState, updateTokens } from 'containers/App/authActions';
import { setStorageItem } from 'utils/localStorage';

export function* authorize({ name, mobile, email, password, isRegistering }) {
  try {
    let response;
    if (isRegistering) {
      response = yield call(HungerStationAPI.register, {
        name,
        mobile,
        email,
        password,
      });
    } else {
      response = yield call(HungerStationAPI.login, { mobile, password });
    }
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Something went wrong.');
    } else {
      throw error;
    }
  } finally {
    yield put(setAuthState(false));
  }
}

export function* saveTokens(tokens) {
  yield call(setStorageItem, 'tokens', JSON.stringify(tokens));
  yield put(updateTokens(tokens));
}
