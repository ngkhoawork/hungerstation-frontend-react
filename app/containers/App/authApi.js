import { loginQuery } from 'utils/graphql/queries';
import { client, protectedClient } from 'utils/graphql';
import {
  registerUserMutation,
  refreshTokenMutation,
} from 'utils/graphql/mutations';

const auth = {
  register(...credentials) {
    return client.request(registerUserMutation, credentials);
    // return Promise.resolve(true);
  },
  login(...credentials) {
    return client.request(loginQuery, credentials);
  },
  logout() {
    // TODO: To create graphql query here
    return Promise.resolve(true);
  },
  refresh(refreshTokentoken) {
    return client.request(refreshTokenMutation, { refreshTokentoken });
  },
  makeRequestToProtected(token, query, payload) {
    protectedClient(token).request(query, payload);
  },
};

export default auth;
