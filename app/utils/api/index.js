import { client, protectedClient } from 'utils/graphql';

const request = (query, payload) => client.request(query, payload);

const protectedRequest = (token, query, payload) =>
  protectedClient(token).request(query, payload);

export { request, protectedRequest };
