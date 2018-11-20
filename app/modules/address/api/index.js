import { protectedRequest } from 'utils/api';
import {
  getAddressesQuery,
  validateAddressQuery,
  createAddressMutation,
  updateAddressMutation,
} from './query';

export const getAddresses = (token, branchId) =>
  protectedRequest(token, getAddressesQuery, {
    branchId: parseInt(branchId, 10),
  });

export const validateAddress = (token, { branchId, ...payload }) =>
  protectedRequest(token, validateAddressQuery, {
    branchId: parseInt(branchId, 10),
    ...payload,
  });

export const saveAddress = (token, payload) => {
  if (payload.id) {
    return updateAddress(token, payload);
  }

  return createAddress(token, payload);
};

const createAddress = (token, { branchId, ...payload }) =>
  protectedRequest(token, createAddressMutation, {
    // branchId: parseInt(branchId, 10),
    ...payload,
  });

const updateAddress = (token, { district, branchId, ...payload }) =>
  protectedRequest(token, updateAddressMutation, {
    // district: parseInt(district, 10),
    // branchId: parseInt(branchId, 10),
    ...payload,
  });
