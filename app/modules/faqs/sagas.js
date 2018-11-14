import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  fetchFaqs,
  fetchFaqsRequest,
  fetchFaqsSuccess,
  fetchFaqsError,
} from './actions';
import { getFaqs } from './api';

export function* fetchFaqsSaga() {
  try {
    yield put(fetchFaqsRequest());
    const [faqs] = yield all([call(getFaqs)]);
    const faqsGroups = faqs.faq_groups.map(group => group);
    yield put(fetchFaqsSuccess(faqsGroups));
  } catch (e) {
    yield put(fetchFaqsError());
    // console.log(e);
  }
}

export default function* watchFaqsActionsSaga() {
  yield takeLatest(fetchFaqs.type, fetchFaqsSaga);
}
