import { client } from 'utils/graphql';
import { listCitiesQuery } from 'utils/graphql/queries';

const HungerStationAPI = {
  getCities(countryId) {
    return client.request(listCitiesQuery, { country_id: countryId });
  },
};

export default HungerStationAPI;
