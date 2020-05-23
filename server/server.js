const express = require('express');

const { ApolloServer, gql } = require('apollo-server-express');
const { importSchema } = require('graphql-import');

const middleware = require('./middleware');
const resolvers = require('./resolvers');
const schemaDirectives = require('./directives');

const typeDefs = gql(importSchema('schemas/schema.graphql'))

const app = express();
app.use(middleware.bodyJson, middleware.cors, middleware.jwt);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  context: ({ req }) => ({ user: req.user }),
  formatError: ({ extensions: { exception } }) => ({
    stacktrace: exception.stacktrace,
    message: exception.name,
    status: exception.status
  })
});

apolloServer.applyMiddleware({ app })

module.exports = app;