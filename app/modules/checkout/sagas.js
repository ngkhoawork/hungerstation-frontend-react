import { call, put, takeLatest, select } from 'redux-saga/effects';
import { forwardTo } from 'utils/route';
import { getDeepProp } from 'utils/helpers';
import { makeSelectTokens } from 'modules/auth/selectors';
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

    if (getDeepProp(validateOrder, ['errors_with_keys', 'length'])) {
      yield put(validateOrderSuccess(validateOrder));
      return;
    }

    const { createOrder } = yield call(api.createOrder, accessToken, payload);

    yield put(createOrderSuccess(createOrder));

    yield call(forwardTo, `/my-orders/${createOrder.id}`);
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
