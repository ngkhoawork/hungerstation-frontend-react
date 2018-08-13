import { loginQuery } from 'utils/graphql/queries';
import { client, protectedClient } from 'utils/graphql';
import {
  createUserMutation,
  refreshTokenMutation,
} from 'utils/graphql/mutations';

const auth = {
  register(...credentials) {
    return client.request(createUserMutation, credentials);
  },
  login(...credentials) {
    return client.request(loginQuery, credentials);
  },
  logout() {
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
