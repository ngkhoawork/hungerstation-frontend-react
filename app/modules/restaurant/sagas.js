import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchRestaurant,
  fetchRestaurantRequest,
  fetchRestaurantSuccess,
  fetchRestaurantError,
} from './actions';
import { getBranch } from './api';

export function* fetchRestaurantSaga({ payload: id }) {
  try {
    yield put(fetchRestaurantRequest());

    const { branch } = yield call(getBranch, id);

    // console.log(JSON.parse(JSON.stringify(branch)));

    // concat products and menuitems, sort by weight, convert prices to float
    const restaurant = {
      ...branch,
      menu: {
        menugroups: branch.menu.menugroups
          .sort((mgA, mgB) => mgA.weight - mgB.weight)
          .map(({ products, menuitems, ...menugroup }) => ({
            ...menugroup,
            products: products
              .concat(menuitems)
              .sort((itemA, itemB) => itemA.weight - itemB.weight)
              .map(item => ({
                ...item,
                // price: item.price && parseFloat(item.price),
                price: item.price !== undefined ? parseFloat(item.price) : 0,
                menuitems:
                  item.menuitems &&
                  item.menuitems
                    .sort((itemA, itemB) => itemA.weight - itemB.weight)
                    .map(({ price, ...menuitem }) => ({
                      ...menuitem,
                      price: parseFloat(price),
                    })),
              })),
          })),
      },
    };

    // console.log(restaurant);

    yield put(fetchRestaurantSuccess({ restaurant }));
  } catch (e) {
    yield put(fetchRestaurantError());
    throw e;
  }
}

export default function* watchRestaurantsActionsSaga() {
  yield takeLatest(fetchRestaurant.type, fetchRestaurantSaga);
}
