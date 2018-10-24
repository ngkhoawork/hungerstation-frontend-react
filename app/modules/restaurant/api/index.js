import { request } from 'utils/api';
import { getBranchQuery, getBranchMenuQuery } from './query';

export const getBranch = id =>
  request(getBranchQuery, { id: parseInt(id, 10) });

export const getBranchMenu = branchId =>
  request(getBranchMenuQuery, { branchId: parseInt(branchId, 10) });
