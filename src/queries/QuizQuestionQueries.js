import { gql } from 'apollo-boost'

export const SUBSCRIPTION_ADDED_MESSAGE = gql`
  subscription {
    questionReceived {
      id
      type
      image
    }
  }
`
