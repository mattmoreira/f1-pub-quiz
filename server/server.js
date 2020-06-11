const express = require('express')
const http = require('http')

const { ApolloServer, gql } = require('apollo-server-express')

const middleware = require('./middleware')

const schemaDirectives = require('./modules/directives')
const resolvers = require('./modules/resolvers')
const typeDefs = gql(require('./modules/typeDefs'))

const app = express()

const appContext = ({ req }) => {
  if (req && req.user) {
    return { session: req.user.session, team: req.user.team }
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  context: appContext,
  formatError: ({ extensions: { exception } }) => ({
    stacktrace: exception.stacktrace,
    message: exception.name,
    status: exception.status
  })
})

app.use(middleware.bodyJson, middleware.cors, middleware.jwt)
apolloServer.applyMiddleware({ app })

const httpServer = http.createServer(app)
apolloServer.installSubscriptionHandlers(httpServer)

module.exports = { httpServer, app }
