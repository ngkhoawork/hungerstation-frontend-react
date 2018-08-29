import { GraphQLClient } from 'graphql-request';

let BASE_URL;

switch (process.env.API_ENV) {
  case 'production':
    BASE_URL = 'https://development.hs-preview.com/api/v3/graphql';
    break;
  case 'staging':
    BASE_URL = 'https://hs-staging.com/api/v3/graphql';
    break;
  default:
    BASE_URL = 'http://localhost:3001';
    break;
}

export const protectedClient = token =>
  new GraphQLClient(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const client = new GraphQLClient(BASE_URL);
