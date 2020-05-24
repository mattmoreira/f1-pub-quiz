import { gql } from 'apollo-boost'

export const GET_RANDOM_CAR = gql`
  query {
    randomCar {
      image
    }
  }
`
