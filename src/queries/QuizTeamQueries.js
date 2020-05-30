import { gql } from 'apollo-boost'

export const REGISTER_TEAM = gql`
  mutation RegisterTeam($input: RegisterTeamInput) {
    registerTeam(input: $input) {
      id
      fullName
    }
  }
`
