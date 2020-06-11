const merge = require('lodash.merge')

const authModule = require('./auth')

module.exports = merge(authModule.directive)
