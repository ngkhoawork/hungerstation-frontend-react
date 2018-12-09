import { request, arbitraryRequest } from 'utils/api';
import intlService from 'utils/intlService';
import { getBranchQuery, getBranchDeliveryConditionsQuery } from './query';

export const getBranch = id =>
  arbitraryRequest(
    { 'Accept-Language': intlService.getLocale() },
    getBranchQuery,
    { id: parseInt(id, 10) },
  );

export const getDeliveryConditions = ({ branchId, districtId }) => {
  const params = {
    branchId: parseInt(branchId, 10),
    districtId: parseInt(districtId, 10),
  };

  return request(getBranchDeliveryConditionsQuery, params);
};
