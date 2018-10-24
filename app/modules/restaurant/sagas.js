import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  fetchRestaurant,
  fetchRestaurantRequest,
  fetchRestaurantSuccess,
  fetchRestaurantError,
} from './actions';
import { getBranch, getBranchMenu } from './api';

export function* fetchRestaurantSaga({ payload: id }) {
  try {
    yield put(fetchRestaurantRequest());

    const [{ branch }, { menu }] = yield all([
      call(getBranch, id),
      call(getBranchMenu, id),
    ]);

    const modifierGroups = menu.modifier_groups.map(group => ({
      id: group.id,
      name: group.name,
      min: group.min_option,
      max: group.max_option,
      modifiers: menu.modifiers.filter(
        ({ id }) => group.modifier_ids.indexOf(parseInt(id, 10)) > -1,
      ),
    }));
    const restaurant = {
      id: branch.id,
      name: branch.name,
      status: branch.status,
      logo: branch.restaurant.logo,
      rateAverage: branch.restaurant.rate_average,
      cuisines: branch.restaurant.kitchens.map(({ id, name, image_thumb }) => ({
        id,
        name,
        image: image_thumb,
      })),
      menuItems: menu.menuitems.map(item => ({
        id: item.id,
        image: item.images[0],
        name: item.name,
        shortName: item.short_name,
        price: parseFloat(item.price),
        description: item.description,
        workingTimes: item.working_times,
        modifierGroups: modifierGroups.filter(
          ({ id }) => item.modifier_group_ids.indexOf(parseInt(id, 10)) > -1,
        ),
      })),
    };

    yield put(fetchRestaurantSuccess({ restaurant }));
  } catch (e) {
    yield put(fetchRestaurantError());
    console.log(e);
  }
}

export default function* watchRestaurantsActionsSaga() {
  yield takeLatest(fetchRestaurant.type, fetchRestaurantSaga);
}
