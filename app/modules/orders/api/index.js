import { protectedRequest } from 'utils/api';
import { getOrdersQuery } from './query';

export const getOrders = token => protectedRequest(token, getOrdersQuery);
