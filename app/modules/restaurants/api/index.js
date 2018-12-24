import { requestWithHeaders } from 'utils/api';
import intlService from 'utils/intlService';
import { getDeliveriesQuery, getDeliveryFiltersQuery } from './query';

const getRestaurants = ({ lat, lng, deliveryType, localId }) => {
  const params = {
    deliveryType,
  };

  if (localId) {
    params.localId = localId;
  } else {
    params.lat = lat;
    params.lng = lng;
  }
  return requestWithHeaders(
    { 'Accept-Language': intlService.getLocale() },
    getDeliveriesQuery,
    { ...params },
  );
};

const getDeliveryFilters = () =>
  requestWithHeaders(
    { 'Accept-Language': intlService.getLocale() },
    getDeliveryFiltersQuery,
  );

export default {
  getRestaurants,
  getDeliveryFilters,
};
