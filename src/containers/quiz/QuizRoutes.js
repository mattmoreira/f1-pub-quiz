import React from 'react'
import { Route } from 'react-router'

import QuizTeamContainer from './team/QuizTeamContainer'
import QuizQuestionContainer from './question/QuizQuestionContainer'
import QuizStartContainer from './QuizStartContainer'

const QuizRoutes = () => (
  <>
    <Route path="/question/:id" component={QuizQuestionContainer} />
    <Route path="/team" component={QuizTeamContainer} />
    <Route exact path="/" component={QuizStartContainer} />
  </>
)

export default QuizRoutes
