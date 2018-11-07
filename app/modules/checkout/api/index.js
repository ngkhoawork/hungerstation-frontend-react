import { protectedRequest, request } from 'utils/api';
import {
  getDeliveryOptionsQuery,
  getCreditCardsQuery,
  validateCouponQuery,
  createOrderMutation,
} from './query';

export const getDeliveryOptions = ({ branchId, lat, lng }) =>
  request(getDeliveryOptionsQuery, {
    branchId: parseInt(branchId, 10),
    lat,
    lng,
  });

export const getCreditCards = token =>
  protectedRequest(token, getCreditCardsQuery);

export const validateCoupon = (token, code) =>
  protectedRequest(token, validateCouponQuery, { code });

export const createOrder = (token, payload) => {
  protectedRequest(token, createOrderMutation, { ...payload });
};
