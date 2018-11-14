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
  const orderItems = payload.orderItems.map(
    item => `{
      menuitem_id: ${item.menuitem_id}
      count: ${item.count}
      orderitem_link_modifiers: [${item.orderitem_link_modifiers.join(', ')}]
    }`,
  );
  const mutation = createOrderMutation.replace(
    '$orderItems',
    `[${orderItems.join(' ')}]`,
  );
  // console.log(mutation, payload);
  protectedRequest(token, mutation, payload);
};
