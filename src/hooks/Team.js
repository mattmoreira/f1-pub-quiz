import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'

import { AUTHENTICATE_TEAM } from 'queries/QuizTeamQueries'

import { saveToken } from 'services/AuthService'

export const useAuthenticateTeam = () => {
  const { push: pushHistory } = useHistory()

  const [authenticateTeam] = useMutation(AUTHENTICATE_TEAM)

  return async ({ teamName }) => {
    const input = { name: teamName }

    const result = await authenticateTeam({ variables: { input } })
    saveToken(result.data.authenticate)

    pushHistory('/question')
  }
}
