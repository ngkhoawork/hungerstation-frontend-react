import { GraphQLClient } from 'graphql-request';

const API_URL_BASE = 'http://localhost:3001';
const API_URL_DEVELOPMENT = 'https://development.hs-preview.com/api/v3/graphql';
const API_URL_STAGING = 'https://hs-staging.com/api/v3/graphql';
const API_URL_PRODUCTION = API_URL_BASE;

let API_URL = API_URL_BASE;

switch (process.env.API_ENV) {
  case 'production':
    API_URL = API_URL_PRODUCTION;
    break;
  case 'development':
    API_URL = API_URL_DEVELOPMENT;
    break;
  case 'staging':
    API_URL = API_URL_STAGING;
    break;
  default:
    break;
}

export const protectedClient = token =>
  new GraphQLClient(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const client = new GraphQLClient(API_URL);
