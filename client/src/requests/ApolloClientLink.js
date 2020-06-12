import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  split
} from 'apollo-boost'

import { onError } from 'apollo-link-error'
import { WebSocketLink } from 'apollo-link-ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'

import { getMainDefinition } from 'apollo-utilities'

import { GRAPHQL_HTTP_URL, GRAPHQL_WEBSOCKET_URL } from '../config/endpoint'

import { getToken, isLoggedIn } from '../services/AuthService'

import GraphQLError from '../errors/GraphQLError'

const authLink = new ApolloLink((operation, forward) => {
  if (isLoggedIn()) {
    const Authorization = `Bearer ${getToken()}`

    operation.setContext({
      headers: { Authorization }
    })
  }

  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    throw new GraphQLError(graphQLErrors)
  }

  if (networkError) {
    console.warn(`[Network error]: ${networkError}`)
  }
})

const httpLink = ApolloLink.from([
  errorLink,
  authLink,
  new HttpLink({
    uri: GRAPHQL_HTTP_URL
  })
])

const clientSub = new SubscriptionClient(GRAPHQL_WEBSOCKET_URL, {
  lazy: true,
  reconnect: true,
  connectionParams: () => ({ sessionToken: getToken() })
})

const webSocketLink = ApolloLink.from([errorLink, new WebSocketLink(clientSub)])

const isSubscriptionOperation = operationDefinition => {
  const { operation: operationType, kind } = getMainDefinition(
    operationDefinition.query
  )

  return operationType === 'subscription' && kind === 'OperationDefinition'
}

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: split(isSubscriptionOperation, webSocketLink, httpLink)
})
