import React from 'react'
import { Route } from 'react-router'

import QuizTeamContainer from './QuizTeamContainer'
import QuizStartContainer from './QuizStartContainer'
import QuizQuestionContainer from './QuizQuestionContainer'

const QuizRoutes = () => (
  <>
    <Route path="/question/:id" component={QuizQuestionContainer} />
    <Route path="/team" component={QuizTeamContainer} />
    <Route exact path="/" component={QuizStartContainer} />
  </>
)

export default QuizRoutes
