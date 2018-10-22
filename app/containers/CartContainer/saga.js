import { takeEvery, select, put } from 'redux-saga/effects';
import { addToCart, removeFromCart, setOrderAmount } from './actions';
import {
  selectCartPurchases,
  selectCartPurchasesQuantities,
} from './selectors';

function* calculateOrderAmountSaga() {
  const purchases = yield select(selectCartPurchases);
  const quantitiesByPurchaseId = yield select(selectCartPurchasesQuantities);

  const orderAmount = purchases.reduce(
    (acc, { id, price }) => acc + price * quantitiesByPurchaseId[id],
    0,
  );

  yield put(setOrderAmount(orderAmount));
}

export default function* watchAddingPurchaseToCartSaga() {
  yield takeEvery(
    [addToCart.type, removeFromCart.type],
    calculateOrderAmountSaga,
  );
}
