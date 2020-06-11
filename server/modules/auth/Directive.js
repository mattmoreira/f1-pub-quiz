const assert = require('assert')

const { defaultFieldResolver } = require('graphql')
const { SchemaDirectiveVisitor } = require('graphql-tools')

const { UnauthorizedError } = require('../../errors/auth')

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const unauthorizedError = new UnauthorizedError()

    const { resolve = defaultFieldResolver, subscribe } = field

    const resolver = (...args) => {
      const context = args[2]

      assert.ok(context.session, unauthorizedError)

      return resolve.apply(this, args)
    }

    const subscriber = (...args) => {
      const context = args[2]

      assert.ok(context.session, unauthorizedError)

      return subscribe.apply(this, args)
    }

    if (field.resolve) {
      field.resolve = resolver
    } else if (field.subscribe) {
      field.subscribe = subscriber
    }
  }
}

module.exports = AuthDirective
