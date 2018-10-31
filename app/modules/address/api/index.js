import { protectedRequest } from 'utils/api';
import {
  getAddressesQuery,
  createAddressMutation,
  updateAddressMutation,
} from './query';

export const getAddresses = (token, branchId) =>
  protectedRequest(token, getAddressesQuery, {
    branchId: parseInt(branchId, 10),
  });

export const saveAddress = (token, payload) => {
  const action = payload.id ? updateAddressMutation : createAddressMutation;
  protectedRequest(token, action, { ...payload });
};
