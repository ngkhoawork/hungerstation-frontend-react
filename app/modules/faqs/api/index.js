import { request } from 'utils/api';
import { getFaqsQuery } from './query';

export const getFaqs = () => request(getFaqsQuery);
