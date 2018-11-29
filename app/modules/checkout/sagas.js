import { call, put, takeLatest, select } from 'redux-saga/effects';
import { forwardTo } from 'utils/route';
import { makeSelectTokens } from 'modules/auth/selectors';
import { fetchOrders } from 'modules/orders/actions';
import {
  fetchDeliveryOptions,
  fetchDeliveryOptionsSuccess,
  fetchCreditCards,
  // fetchCreditCardsSuccess,
  validateOrder,
  validateOrderRequest,
  validateOrderSuccess,
  validateOrderError,
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

export function* validateOrderSaga({ payload }) {
  try {
    yield put(validateOrderRequest());

    const { accessToken } = yield select(makeSelectTokens);
    const { validateOrder } = yield call(
      api.validateOrder,
      accessToken,
      payload,
    );

    if (payload.coupon) validateOrder.coupon = payload.coupon;

    yield put(validateOrderSuccess(validateOrder));
  } catch (e) {
    yield put(validateOrderError());
    // console.log(e);
  }
}

export function* createOrderSaga({ payload }) {
  try {
    yield put(validateOrderRequest());

    const { accessToken } = yield select(makeSelectTokens);
    const { validateOrder } = yield call(
      api.validateOrder,
      accessToken,
      payload,
    );

    if (payload.coupon) validateOrder.coupon = payload.coupon;

    if (validateOrder.errors_with_keys) {
      yield put(validateOrderSuccess(validateOrder));
      return;
    }

    const { createOrder } = yield call(api.createOrder, accessToken, payload);
    yield call(fetchOrders);
    yield call(forwardTo, `/my-orders/${createOrder.id}`);

    yield put(createOrderSuccess(createOrder));
  } catch (e) {
    yield put(validateOrderError());
    // console.log(e);
  }
}

export default function* watchAddressActionsSaga() {
  yield takeLatest(fetchDeliveryOptions.type, fetchDeliveryOptionsSaga);
  yield takeLatest(fetchCreditCards.type, fetchCreditCardsSaga);
  yield takeLatest(validateOrder.type, validateOrderSaga);
  yield takeLatest(createOrder.type, createOrderSaga);
}
