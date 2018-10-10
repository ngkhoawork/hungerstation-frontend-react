import { takeEvery, select, put } from 'redux-saga/effects';
import { lowerCase } from 'lodash/fp';
import { updateVisibleRestaurantsAction } from 'modules/restaurants/actions';
import { selectRestaurants } from 'modules/restaurants/selectors';
import { searchRestaurantAction } from './actions';

function* searchRestaurantsSaga({ payload: searchString }) {
  const restaurants = yield select(selectRestaurants);

  const regex = new RegExp(lowerCase(searchString));

  const filteredIds = restaurants.reduce(
    (acc, { id, name }) => (regex.test(lowerCase(name)) ? [...acc, id] : acc),
    [],
  );

  yield put(updateVisibleRestaurantsAction(filteredIds));
}

export default function* litenToolBarActionsSaga() {
  yield takeEvery(searchRestaurantAction.type, searchRestaurantsSaga);
}
