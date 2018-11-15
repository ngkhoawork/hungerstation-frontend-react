import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectTokens } from 'modules/auth/selectors';
import { get } from 'lodash';
import {
  fetchOrders,
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersError,
} from './actions';
import { getOrders } from './api';
import { getOrderDescription } from '../../utils/helpers';

export function* fetchOrdersSaga() {
  try {
    yield put(fetchOrdersRequest());
    const { accessToken } = yield select(makeSelectTokens);
    const { orders } = yield call(getOrders, accessToken);

    const myOrders = orders.map(order => ({
      id: order.id,
      state: order.state,
      address: get(
        order,
        ['address', 'address_details', 0, 'description'],
        null,
      ),
      city: get(
        order,
        ['address', 'address_details', 0, 'local', 'city'],
        null,
      ),
      district: get(order, ['address', 'address_details', 0, 'local'], null),
      branchName: get(order, ['branch', 'name'], null),
      branchId: get(order, ['branch', 'id'], null),
      restaurant: get(order, ['branch', 'restaurant']),
      restaurantId: get(order, ['branch', 'restaurant', 'id'], null),
      image: get(order, ['branch', 'restaurant', 'logo'], null),
      price: order.total,
      fee: order.fee,
      deliveryProvider: order.delivery_provider,
      deliveredAt: order.delivered_at ? new Date(order.delivered_at) : null,
      dueAt: order.due_at ? new Date(order.due_at) : null,
      orderItems: order.orderitems.map(item => ({
        orderId: item.order_id,
        menuItemId: item.menuitem_id,
        menuItemName: item.menuitem.name,
        amount: item.amount,
        count: item.count || 1,
        description: getOrderDescription(item),
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
