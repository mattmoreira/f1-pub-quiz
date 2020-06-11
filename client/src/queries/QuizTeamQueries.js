import { gql } from 'apollo-boost'

export const AUTHENTICATE_TEAM = gql`
  mutation AuthenticateTeam($input: AuthenticateTeamInput) {
    authenticate(input: $input)
  }
`
