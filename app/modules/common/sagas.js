import { call, put } from 'redux-saga/effects';
import { setStorageItem } from 'utils/localStorage';
import { updateTokens } from '../auth/actions';

export function* saveTokens(tokens) {
  yield call(setStorageItem, 'tokens', JSON.stringify(tokens));
  yield put(updateTokens(tokens));
}
