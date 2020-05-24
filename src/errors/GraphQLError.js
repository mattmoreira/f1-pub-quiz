export default class GraphQLError extends Error {
    static getMessage = ({ path, message, locations }) => `
      [GraphQL error]: {
        Path: ${path},
        Message: ${message},
        Location: ${locations}
      }
    `

    static formatMessages = errors => errors.map(GraphQLError.getMessage);
  
    constructor(errors) {
      const formattedErrors = GraphQLError.formatMessages(errors)
      super(formattedErrors.join('\n'))

      formattedErrors.forEach(console.error);
      this.name = 'GRAPHQL_ERROR';
    }
  }