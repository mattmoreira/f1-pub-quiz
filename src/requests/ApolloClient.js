import { ApolloClient, InMemoryCache } from 'apollo-boost';

import link from './ApolloClientLink';

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default apolloClient;