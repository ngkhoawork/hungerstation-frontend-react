import { protectedRequest, request } from 'utils/api';
import {
  getDeliveryOptionsQuery,
  getCreditCardsQuery,
  createOrderMutation,
  validateOrderMutation,
} from './query';

export const getDeliveryOptions = ({ branchId, lat, lng }) =>
  request(getDeliveryOptionsQuery, {
    branchId: parseInt(branchId, 10),
    lat,
    lng,
  });

export const getCreditCards = token =>
  protectedRequest(token, getCreditCardsQuery);

const generateOrderMutation = (items, mutation) => {
  const orderItems = items.map(
    item => `{
      menuitem_id: ${item.menuitem_id}
      count: ${item.count}
      orderitem_link_modifiers: [${item.orderitem_link_modifiers.join(', ')}]
    }`,
  );

  return mutation.replace('$orderItems', `[${orderItems.join(' ')}]`);
};

export const validateOrder = (token, { orderItems, ...payload }) => {
  const mutation = generateOrderMutation(orderItems, validateOrderMutation);
  return protectedRequest(token, mutation, payload);
};

export const createOrder = (token, { orderItems, ...payload }) => {
  const mutation = generateOrderMutation(orderItems, createOrderMutation);
  return protectedRequest(token, mutation, payload);
};
