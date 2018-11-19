import { request } from 'utils/api';
import { getBranchQuery, getBranchDeliveryConditionsQuery } from './query';

export const getBranch = id =>
  request(getBranchQuery, { id: parseInt(id, 10) });

export const getDeliveryConditions = ({ branchId, districtId }) => {
  const params = {
    branchId: parseInt(branchId, 10),
    districtId: parseInt(districtId, 10),
  };

  return request(getBranchDeliveryConditionsQuery, params);
};
