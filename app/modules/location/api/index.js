import { request } from 'utils/api';
import { listCitiesQuery } from './query';

const getCities = countryId =>
  request(listCitiesQuery, { country_id: countryId });

export default { getCities };
