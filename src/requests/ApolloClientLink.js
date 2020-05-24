import { HttpLink, ApolloLink } from 'apollo-boost'
import { onError } from 'apollo-link-error'

import { GRAPHQL_SERVER_URL } from '../config/endpoint'

import GraphQLError from '../errors/GraphQLError'

const httpLink = new HttpLink({
  uri: GRAPHQL_SERVER_URL
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    throw new GraphQLError(graphQLErrors)
  }

  if (networkError) {
    console.warn(`[Network error]: ${networkError}`)
  }
})

export default ApolloLink.from([errorLink, httpLink])
