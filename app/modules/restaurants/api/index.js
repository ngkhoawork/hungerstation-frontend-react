import { request } from 'utils/api';
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
  return request(getDeliveriesQuery, {
    ...params,
  });
};

const getDeliveryFilters = () => request(getDeliveryFiltersQuery);

export default {
  getRestaurants,
  getDeliveryFilters,
};
