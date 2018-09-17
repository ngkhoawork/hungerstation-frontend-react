import { client, protectedClient } from 'utils/graphql';
import { userQuery, listCitiesQuery } from 'utils/graphql/queries';

import {
  createUserMutation,
  authenticateUserMutation,
  refreshTokenMutation,
} from 'utils/graphql/mutations';

const HungerStationAPI = {
  register(credentials) {
    return client.request(createUserMutation, credentials);
  },
  login(credentials) {
    return client.request(authenticateUserMutation, credentials);
  },
  logout() {
    return Promise.resolve(true);
  },
  refresh(refreshTokentoken) {
    return client.request(refreshTokenMutation, { refreshTokentoken });
  },
  makeRequestToProtected(token, query, payload) {
    return protectedClient(token).request(query, payload);
  },
  getUser(token, userId) {
    return protectedClient(token).request(userQuery, { userId });
  },
  getCities(countryId) {
    return client.request(listCitiesQuery, { countryId });
  },
};

export default HungerStationAPI;
