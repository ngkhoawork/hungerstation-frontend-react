import { request } from 'utils/api';
import {
  listCitiesQuery,
  getLocalQuery,
  getDistrictBySlugQuery,
} from './query';

const getCities = countryId =>
  request(listCitiesQuery, { country_id: countryId });

const getDistrict = coords => request(getLocalQuery, coords);

const getDistrictBySlug = slug => request(getDistrictBySlugQuery, slug);

export default { getCities, getDistrict, getDistrictBySlug };
