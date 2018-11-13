import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchOrders,
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersError,
} from './actions';
import { getOrders } from './api';

export function* fetchOrdersSaga() {
  try {
    yield put(fetchOrdersRequest());

    const { orders } = yield call(getOrders);

    const myOrders = orders.map(order => ({
      id: order.id,
      state: order.state,
      branchId: order.branch_id,
      amount: order.amount,
      fee: order.fee,
      orderItems: order.orderitems.map(item => ({
        id: item.id,
        orderId: item.order_id,
        menuItemId: item.menuitem_id,
        amount: item.amount,
      })),
    }));
    yield put(fetchOrdersSuccess({ orders: myOrders }));
  } catch (e) {
    yield put(fetchOrdersError());
    throw e;
  }
}

export default function* watchRestaurantsActionsSaga() {
  yield takeLatest(fetchOrders.type, fetchOrdersSaga);
}
