const resolvers = {
  Mutation: require('./Mutation')
}

module.exports = {
  resolvers,
  directive: require('./Directive')
}
