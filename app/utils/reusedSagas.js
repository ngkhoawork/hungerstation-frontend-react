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
    // FIXME
    yield put(
      stopSubmit(isRegistering ? 'signupform' : 'loginForm', {
        _error: 'There was an error.',
      }),
    );

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put(setAuthState(false));
  }
}

export function* saveTokens(tokens) {
  yield call(setStorageItem, 'tokens', JSON.stringify(tokens));
  yield put(updateTokens(tokens));
}
