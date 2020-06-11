const resolvers = {
  Query: require('./Query'),
  Mutation: require('./Mutation'),
  Subscription: require('./Subscription')
}

module.exports = { resolvers }
