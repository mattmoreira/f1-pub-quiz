const express = require('express')
const http = require('http')

const { ApolloServer, gql } = require('apollo-server-express')

const middleware = require('./middleware')

const schemaDirectives = require('./modules/directives')
const resolvers = require('./modules/resolvers')
const typeDefs = require('./modules/typeDefs')

const app = express()

const appContext = ({ req }) => {
  if (req && req.user) {
    return { session: req.user.session, team: req.user.team }
  }
}

const apolloServer = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  schemaDirectives,
  context: appContext,
  formatError: err => {
    console.error('ERROR', err.message)

    return {
      stacktrace: err.extensions.exception.stacktrace,
      message: err.extensions.exception.name,
      status: err.extensions.exception.status
    }
  }
})

app.use(middleware.bodyJson, middleware.cors, middleware.jwt)
apolloServer.applyMiddleware({ app })

const httpServer = http.createServer(app)
apolloServer.installSubscriptionHandlers(httpServer)

module.exports = { httpServer, app }
