import { client, protectedClient, clientWithHeaders } from 'utils/graphql';

const request = (query, payload) => client.request(query, payload);

const requestWithHeaders = (headers, query, payload) =>
  clientWithHeaders(headers).request(query, payload);

const protectedRequest = (token, query, payload) =>
  protectedClient(token).request(query, payload);

export { request, protectedRequest, requestWithHeaders };
