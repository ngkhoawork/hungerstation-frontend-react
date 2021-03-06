import { call, put, select, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { makeSelectTokens } from 'modules/auth/selectors';
import { getOrderDescription, compareByState } from 'utils/helpers';
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
    const { accessToken } = yield select(makeSelectTokens);
    const { orders } = yield call(getOrders, accessToken);

    const myOrders = orders
      .map(order => ({
        id: order.id,
        state: order.state,
        deliveredAt: order.delivered_at,
        createdAt: order.created_at,
        deliveryEta: order.delivery_eta,
        dueAt: order.due_at,
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
        amount: order.amount,
        fee: order.fee,
        discount: parseFloat(order.discount),
        deliveryProvider: order.delivery_provider,
        orderItems: order.orderitems.map(item => ({
          orderId: item.order_id,
          menuItem: item.menuitem,
          amount: item.amount,
          count: item.count || 1,
          description: getOrderDescription(item),
        })),
        tracking: {
          activeStatus: order.tracking.active_status,
          arrayOfStates: order.tracking.array_of_states,
          currentStateKey: order.tracking.current_state_key,
          trackable: order.tracking.trackable,
        },
        realTimeTracking: order.real_time_tracking,
      }))
      .sort(compareByState);
    yield put(fetchOrdersSuccess({ orders: myOrders }));
  } catch (e) {
    yield put(fetchOrdersError());
  }
}

export default function* watchRestaurantsActionsSaga() {
  yield takeLatest(fetchOrders.type, fetchOrdersSaga);
}
