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
  if (payload.id) {
    updateAddress(token, payload);
  } else {
    createAddress(token, payload);
  }
};

const createAddress = (token, { branchId, ...payload }) => {
  protectedRequest(token, createAddressMutation, {
    // branchId: parseInt(branchId, 10),
    ...payload,
  });
};

const updateAddress = (token, { district, branchId, ...payload }) => {
  protectedRequest(token, updateAddressMutation, {
    district: parseInt(district, 10),
    // branchId: parseInt(branchId, 10),
    ...payload,
  });
};
