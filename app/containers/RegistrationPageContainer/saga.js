import { takeLatest, call, put, select } from 'redux-saga/effects';
import gql from 'graphql-tag';
import client from '../../utils/apolloClient';
import authSaga from '../App/authSagas';

const signUp = () =>
  client.resetStore().then(() =>
    client
      .query({
        query: gql`
          {
            rates(currency: "USD") {
              currency
            }
          }
        `,
      })
      .catch(err => err),
  );

export function* signUpAction() {
  try {
    const resp = yield call(signUp);
    console.log('resp', resp);
  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
// export default function* defaultSaga() {
//   yield takeLatest('SIGN_UP', signUpAction);
// }

export default authSaga;
