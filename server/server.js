const express = require('express')
const http = require('http')

const { ApolloServer, gql } = require('apollo-server-express')
const { importSchema } = require('graphql-import')

const middleware = require('./middleware')
const resolvers = require('./resolvers')
const schemaDirectives = require('./directives')

const typeDefs = gql(importSchema('schemas/schema.graphql'))

const app = express()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
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
