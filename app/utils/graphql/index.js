import { GraphQLClient } from 'graphql-request';
import intlService from 'utils/intlService';

let API_URL = 'http://localhost:3000/proxy';

switch (process.env.API_ENV) {
  case 'staging':
    API_URL = 'https://hs-staging.com/api/v3/graphql';
    break;
  case 'production':
    API_URL = 'https://hungerstation.com/api/v3/graphql';
    break;
  default:
    break;
}

export const protectedClient = token =>
  new GraphQLClient(API_URL, {
    headers: {
      'Accept-Language': intlService.getLocale(),
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const client = new GraphQLClient(API_URL, {
  headers: {
    'Accept-Language': intlService.getLocale(),
    'Content-Type': 'application/json',
  },
  // credentials: 'include',
  // mode: 'cors',
});
