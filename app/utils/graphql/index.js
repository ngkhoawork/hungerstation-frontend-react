import { GraphQLClient } from 'graphql-request';

export const BASE_URL = 'http://localhost:3001';

export const protectedClient = token =>
  new GraphQLClient(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const client = new GraphQLClient(BASE_URL);
