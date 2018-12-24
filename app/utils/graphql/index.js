import { GraphQLClient } from 'graphql-request';
import intlService from 'utils/intlService';

const defaultEndpoint = 'https://hungerstation.com/api/v3/graphql';
const defaultEnvEndpoints = {
  staging: 'https://hs-staging.com/api/v3/graphql',
  development: 'http://localhost:3000/proxy',
};

const setGraphqlEndpoint = apiEnv => {
  let graphqlEndpoint = defaultEnvEndpoints[apiEnv];
  if (defaultEndpoint === undefined) {
    return defaultEndpoint;
  }

  const storageEndpoint = localStorage.getItem('graphql.endpoint');
  if (storageEndpoint) {
    graphqlEndpoint = storageEndpoint;
  }

  console.log(`Connecting to: ${graphqlEndpoint}`); // eslint-disable-line no-console
  return graphqlEndpoint;
};

const graphqlEndpoint = setGraphqlEndpoint(process.env.API_ENV);

export const clientWithHeaders = headers =>
  new GraphQLClient(graphqlEndpoint, {
    headers: {
      'Accept-Language': intlService.getLocale(),
      'Content-Type': 'application/json',
      ...headers,
    },
  });

export const client = clientWithHeaders({});

export const protectedClient = token =>
  clientWithHeaders({
    Authorization: `Bearer ${token}`,
  });
