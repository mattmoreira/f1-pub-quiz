const merge = require('lodash.merge')

const authModule = require('./auth')
const questionModule = require('./question')

module.exports = merge(authModule.resolvers, questionModule.resolvers)
