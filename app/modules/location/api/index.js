import { request } from 'utils/api';
import {
  listCitiesQuery,
  getLocalQuery,
  getDistrictBySlugQuery,
} from './query';

const getCities = countryId =>
  request(listCitiesQuery, { country_id: countryId });

const getDistrict = coords => request(getLocalQuery, coords);

const getDistrictBySlugs = (slug, citySlug) =>
  request(getDistrictBySlugQuery, slug, citySlug);

export default { getCities, getDistrict, getDistrictBySlugs };
