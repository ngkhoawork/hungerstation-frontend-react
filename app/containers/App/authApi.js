import { loginQuery } from 'utils/graphql/queries';
import { client, protectedClient } from 'utils/graphql';
import {
  // createUserMutation,
  refreshTokenMutation,
} from 'utils/graphql/mutations';

const auth = {
  register(...credentials) {
    console.log('credentials', credentials);
    // return client.request(createUserMutation, credentials);
    return Promise.resolve({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlN2ZXRhIEJ1YmVuIiwiaWF0IjoxNTM0MjMwODk5fQ.BvEvWdB9ozasUxEv9l9o186qOwRYfDr56oGOcoPr1Lg',
      refresh_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlN2ZXRhIEJ1YmVuIiwiaWF0IjoxNTM0MjMwODk5fQ.BvEvWdB9ozasUxEv9l9o186qOwRYfDr56oGOcoPr1Lg',
      user_id: 5,
    });
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
