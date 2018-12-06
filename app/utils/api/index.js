import { client, protectedClient, arbitraryClient } from 'utils/graphql';

const request = (query, payload) => client.request(query, payload);

const protectedRequest = (token, query, payload) =>
  protectedClient(token).request(query, payload);

const arbitraryRequest = (headers, query, payload) =>
  arbitraryClient(headers).request(query, payload);

export { request, protectedRequest, arbitraryRequest };
