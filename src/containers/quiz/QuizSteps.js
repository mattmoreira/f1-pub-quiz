import React from 'react'
import { Route } from 'react-router'

import QuizTeamStep from './QuizTeamStep'
import QuizStartStep from './QuizStartStep'

const QuizSteps = () => (
  <>
    <Route exact path="/" component={QuizStartStep} />
    <Route exact path="team" component={QuizTeamStep} />
  </>
)

export default QuizSteps
