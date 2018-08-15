import { protectedClient } from 'utils/graphql';
import { userQuery } from 'utils/graphql/queries';

const HungerStationAPI = {
  getUser(token, userId) {
    protectedClient(token).request(userQuery, { userId });
  },
};

export default HungerStationAPI;
