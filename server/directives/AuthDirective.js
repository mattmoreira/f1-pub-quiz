const assert = require('assert');

const { defaultFieldResolver } = require('graphql');
const { SchemaDirectiveVisitor } = require('graphql-tools');

const { UnauthorizedError } = require('../errors/auth');

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (...args) {
      const context = args[2];

      assert.ok(context.user, new UnauthorizedError());
      
      return resolve.apply(this, args)
    };
  }
}

module.exports = AuthDirective;