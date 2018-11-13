import { request } from 'utils/api';
import { getBranchQuery } from './query';

export const getBranch = id =>
  request(getBranchQuery, { id: parseInt(id, 10) });
