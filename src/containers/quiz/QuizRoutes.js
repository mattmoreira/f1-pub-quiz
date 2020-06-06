import React from 'react'
import { Route } from 'react-router'

import QuizTeamInitialContainer from './team/QuizTeamInitialContainer'
import QuizTeamReadyContainer from './team/QuizTeamReadyContainer'
import QuizQuestionContainer from './question/QuizQuestionContainer'
import QuizStartContainer from './QuizStartContainer'
import QuizLeaderboardContainer from './leaderboard/QuizLeaderboardContainer'

const QuizRoutes = () => (
  <>
    <Route exact path="/leaderboard" component={QuizLeaderboardContainer} />
    <Route path="/question" component={QuizQuestionContainer} />
    <Route exact path="/team/ready" component={QuizTeamReadyContainer} />
    <Route exact path="/team" component={QuizTeamInitialContainer} />
    <Route exact path="/" component={QuizStartContainer} />
  </>
)

export default QuizRoutes
