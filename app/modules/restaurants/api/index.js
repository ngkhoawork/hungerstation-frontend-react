import { request } from 'utils/api';
import { getDeliveriesQuery } from './query';

const getRestaurants = ({ lat, lng, deliveryType }) =>
  request(getDeliveriesQuery, {
    lat,
    lng,
    deliveryType,
  });

export default {
  getRestaurants,
};
