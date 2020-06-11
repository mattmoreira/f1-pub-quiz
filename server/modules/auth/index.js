const resolvers = {
  Mutation: require('./Mutation')
}

const directive = {
  auth: require('./Directive')
}

module.exports = { resolvers, directive }
