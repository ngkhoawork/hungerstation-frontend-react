import { call, put, takeLatest, select, all } from 'redux-saga/effects';
import { fetchLocationSaga } from 'modules/location/sagas';
import { selectDistrictId } from 'modules/location/selectors';
import {
  fetchRestaurant,
  fetchRestaurantRequest,
  fetchRestaurantSuccess,
  fetchRestaurantError,
} from './actions';
import { getBranch, getDeliveryConditions } from './api';

export function* fetchRestaurantSaga({ payload }) {
  try {
    yield put(fetchRestaurantRequest());

    let districtId = yield select(selectDistrictId);

    if (!districtId) {
      yield call(fetchLocationSaga, { payload });
      districtId = yield select(selectDistrictId);
    }

    const [{ branch }, { branch_delivery }] = yield all([
      call(getBranch, payload.branchId),
      call(getDeliveryConditions, { ...payload, districtId }),
    ]);

    // console.log(JSON.parse(JSON.stringify(branch)));

    // concat products and menuitems, sort by weight, convert prices to float
    const restaurant = {
      ...branch,
      delivery_conditions: branch_delivery,
      menu: {
        menugroups: (branch.menu.menugroups || [])
          .sort((mgA, mgB) => mgA.weight - mgB.weight)
          .map(({ products, menuitems, ...menugroup }) => ({
            ...menugroup,
            products: products
              .concat(menuitems)
              .sort((itemA, itemB) => itemA.weight - itemB.weight)
              .map(item => ({
                ...item,
                price: parseFloat(item.price || 0),
                list_price: parseFloat(item.list_price || 0),
                modifier_groups:
                  item.modifier_groups &&
                  item.modifier_groups
                    .sort((mgA, mgB) => mgA.weight - mgB.weight)
                    .map(({ modifiers, ...modifierGroup }) => ({
                      ...modifierGroup,
                      modifiers: modifiers.sort(
                        (modA, modB) =>
                          modA.weight === modB.weight
                            ? parseFloat(modA.price) - parseFloat(modB.price)
                            : modA.weight - modB.weight,
                      ),
                    })),
                menuitems:
                  item.menuitems &&
                  item.menuitems
                    .sort((itemA, itemB) => itemA.weight - itemB.weight)
                    .map(
                      ({
                        price,
                        list_price,
                        modifier_groups,
                        ...menuitem
                      }) => ({
                        ...menuitem,
                        price: parseFloat(price),
                        list_price: parseFloat(list_price),
                        modifier_groups:
                          modifier_groups &&
                          modifier_groups
                            .sort((mgA, mgB) => mgA.weight - mgB.weight)
                            .map(({ modifiers, ...modifierGroup }) => ({
                              ...modifierGroup,
                              modifiers: modifiers.sort(
                                (modA, modB) =>
                                  modA.weight === modB.weight
                                    ? parseFloat(modA.price) -
                                      parseFloat(modB.price)
                                    : modA.weight - modB.weight,
                              ),
                            })),
                      }),
                    ),
              })),
          })),
      },
    };

    // console.log(restaurant);

    yield put(fetchRestaurantSuccess({ restaurant }));
  } catch (e) {
    // console.log(e);
    yield put(fetchRestaurantError());
  }
}

export default function* watchRestaurantsActionsSaga() {
  yield takeLatest(fetchRestaurant.type, fetchRestaurantSaga);
}
