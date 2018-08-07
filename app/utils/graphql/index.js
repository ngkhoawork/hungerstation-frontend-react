import { GraphQLCient } from 'graphql-request';

export const BASE_URL = 'http://192.168.1.100:3000';

const client = token =>
  new GraphQLCient(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const makeRequest = (token, query) => {
  // Uncoment when API is ready
  client(token).request(query);
};

export default makeRequest;
