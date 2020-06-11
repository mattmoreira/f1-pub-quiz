const { authenticate } = require('../../services/AuthService')

module.exports = {
  authenticate: (root, { input }) => authenticate({ teamName: input.name })
}
