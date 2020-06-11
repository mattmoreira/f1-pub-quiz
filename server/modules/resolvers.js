const merge = require('lodash.merge')

const authModule = require('./auth')
const questionModule = require('./question')
const imageModule = require('./image')

module.exports = merge(
  authModule.resolvers,
  questionModule.resolvers,
  imageModule.resolvers
)
