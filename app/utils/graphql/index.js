import { GraphQLClient } from 'graphql-request';

export const BASE_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000/proxy'
    : 'https://development.hs-preview.com/api/v3/graphql';

export const protectedClient = token =>
  new GraphQLClient(BASE_URL, {
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const client = new GraphQLClient(BASE_URL, {
  // headers: { 'Content-Type': 'application/json' },
  // credentials: 'include',
  // mode: 'cors',
});
