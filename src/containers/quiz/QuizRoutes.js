import React from 'react'
import { Route } from 'react-router'

import QuizTeamContainer from './team/QuizTeamContainer'
import QuizQuestionContainer from './question/QuizQuestionContainer'
import QuizStartContainer from './QuizStartContainer'
import QuizLeaderboardContainer from './leaderboard/QuizLeaderboardContainer'

const QuizRoutes = () => (
  <>
    <Route path="/leaderboard" component={QuizLeaderboardContainer} />
    <Route path="/question/:id" component={QuizQuestionContainer} />
    <Route path="/team" component={QuizTeamContainer} />
    <Route exact path="/" component={QuizStartContainer} />
  </>
)

export default QuizRoutes
