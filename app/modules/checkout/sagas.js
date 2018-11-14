import { call, put, takeLatest, select } from 'redux-saga/effects';
import { makeSelectTokens } from 'modules/auth/selectors';
import {
  fetchDeliveryOptions,
  fetchDeliveryOptionsSuccess,
  fetchCreditCards,
  // fetchCreditCardsSuccess,
  validateCoupon,
  validateCouponSuccess,
  validateCouponError,
  createOrder,
  createOrderSuccess,
} from './actions';
import * as api from './api';

export function* fetchDeliveryOptionsSaga({ payload }) {
  try {
    const { delivery_options } = yield call(api.getDeliveryOptions, payload);

    yield put(fetchDeliveryOptionsSuccess(delivery_options));
  } catch (e) {
    // console.log(e);
  }
}

// export function* fetchCreditCardsSaga({ payload }) {
export function* fetchCreditCardsSaga() {
  try {
    // const { accessToken } = yield select(makeSelectTokens);
    // const { credit_cards } = yield call(
    //   api.getCreditCards,
    //   accessToken,
    //   payload,
    // );
    // yield put(fetchCreditCardsSuccess(credit_cards));
  } catch (e) {
    // console.log(e);
  }
}

export function* validateCouponSaga({ payload }) {
  try {
    const { accessToken } = yield select(makeSelectTokens);
    const { coupon_validate } = yield call(
      api.validateCoupon,
      accessToken,
      payload,
    );

    yield put(validateCouponSuccess(coupon_validate));
  } catch (e) {
    yield put(validateCouponError());
    // console.log(e);
  }
}

export function* createOrderSaga({ payload }) {
  try {
    const { accessToken } = yield select(makeSelectTokens);
    const { createOrder } = yield call(api.createOrder, accessToken, payload);

    yield put(createOrderSuccess(createOrder));
  } catch (e) {
    // console.log(e);
  }
}

export default function* watchAddressActionsSaga() {
  yield takeLatest(fetchDeliveryOptions.type, fetchDeliveryOptionsSaga);
  yield takeLatest(fetchCreditCards.type, fetchCreditCardsSaga);
  yield takeLatest(validateCoupon.type, validateCouponSaga);
  yield takeLatest(createOrder.type, createOrderSaga);
}
