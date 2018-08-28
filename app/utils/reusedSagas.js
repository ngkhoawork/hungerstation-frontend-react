import { put, call } from 'redux-saga/effects';
import HungerStationAPI from 'api/HungerStationAPI';
import { setAuthState, updateTokens } from 'containers/App/authActions';
import { setStorageItem } from 'utils/localStorage';
import { stopSubmit } from 'redux-form';

export function* authorize({
  username,
  number,
  email,
  password,
  isRegistering,
}) {
  try {
    let response;
    if (isRegistering) {
      response = yield call(
        HungerStationAPI.register,
        username,
        number,
        email,
        password,
      );
    } else {
      response = yield call(HungerStationAPI.login, username, password);
    }
    return response;
  } catch (error) {
    yield put({ type: 'REQUEST_ERROR', error: error.message });
    // FIXME
    yield put(
      stopSubmit(isRegistering ? 'signupform' : 'loginForm', {
        _error: 'There was an error.',
      }),
    );

    return false;
  } finally {
    yield put(setAuthState(false));
  }
}

export function* saveTokens(tokens) {
  yield call(setStorageItem, 'tokens', JSON.stringify(tokens));
  yield put(updateTokens(tokens));
}
